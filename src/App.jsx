import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [formattedText, setFormattedText] = useState('')
  const [formatType, setFormatType] = useState('json') // 'json' or 'xml'
  const [error, setError] = useState('')
  const [showResult, setShowResult] = useState(false)
  
  // 格式化JSON
  const formatJSON = (text) => {
    try {
      const parsed = JSON.parse(text)
      return JSON.stringify(parsed, null, 2)
    } catch (e) {
      throw new Error(`JSON格式化错误: ${e.message}`)
    }
  }
  
  // 格式化XML
  const formatXML = (text) => {
    try {
      // 简单的XML格式化实现
      let formatted = text
        .replace(/></g, '>\n<')
        .replace(/<([^/][^>]*)>/g, (match) => {
          // 为开始标签添加缩进
          return match
        })
      
      // 添加缩进
      let level = 0
      const spaces = '  '
      const lines = formatted.split('\n')
      const indented = lines.map((line) => {
        const trimmed = line.trim()
        if (trimmed.startsWith('</') || trimmed.startsWith('/>')) {
          level = Math.max(0, level - 1)
        }
        const result = spaces.repeat(level) + trimmed
        if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
          level += 1
        }
        return result
      })
      
      return indented.join('\n')
    } catch (e) {
      throw new Error(`XML格式化错误: ${e.message}`)
    }
  }
  
  // 处理格式化按钮点击
  const handleFormat = () => {
    if (!inputText.trim()) {
      setError('请输入要格式化的文本')
      return
    }
    
    try {
      setError('')
      let result
      if (formatType === 'json') {
        result = formatJSON(inputText)
      } else {
        result = formatXML(inputText)
      }
      setFormattedText(result)
      setShowResult(true)
    } catch (e) {
      setError(e.message)
      setShowResult(false)
    }
  }
  
  // 复制格式化后的文本
  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText)
      .then(() => {
        alert('已复制到剪贴板')
      })
      .catch(() => {
        alert('复制失败')
      })
  }
  
  // 清空输入
  const handleClear = () => {
    setInputText('')
    setFormattedText('')
    setError('')
    setShowResult(false)
  }
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>JSON & XML 格式化工具</h1>
      </header>
      
      <main className="app-main">
        <div className="format-selector">
          <label>
            <input
              type="radio"
              name="formatType"
              value="json"
              checked={formatType === 'json'}
              onChange={() => setFormatType('json')}
            />
            JSON
          </label>
          <label>
            <input
              type="radio"
              name="formatType"
              value="xml"
              checked={formatType === 'xml'}
              onChange={() => setFormatType('xml')}
            />
            XML
          </label>
        </div>
        
        <div className="input-section">
          <div className="input-header">
            <h2>输入{formatType.toUpperCase()}</h2>
            <button onClick={handleClear} className="clear-btn">清空</button>
          </div>
          <textarea
            className="input-textarea"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`请输入${formatType.toUpperCase()}文本...`}
            rows={10}
          />
          <div className="button-group">
            <button onClick={handleFormat} className="format-btn">格式化</button>
          </div>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {showResult && (
          <div className="result-section">
            <div className="result-header">
              <h2>格式化结果</h2>
              <button onClick={handleCopy} className="copy-btn">复制</button>
            </div>
            <div className="syntax-highlighter">
              <SyntaxHighlighter
                language={formatType}
                style={tomorrow}
                customStyle={{ margin: 0, borderRadius: '4px' }}
              >
                {formattedText}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>JSON & XML 格式化工具 - 让数据更易读</p>
      </footer>
    </div>
  )
}

export default App
