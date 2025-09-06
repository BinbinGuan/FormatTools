# JSON & XML 格式化工具

![JSON & XML 格式化工具](https://img.shields.io/badge/JSON%20%26%20XML-格式化工具-green)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.4-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

一个功能强大、界面美观的JSON和XML格式化工具，帮助开发者快速格式化、验证和美化JSON与XML数据。

## ✨ 功能特点

- **双格式支持**：同时支持JSON和XML格式的格式化与验证
- **实时语法高亮**：使用Prism.js提供高质量的代码高亮显示
- **错误处理**：提供清晰的语法错误提示
- **一键复制**：快速复制格式化后的代码到剪贴板
- **响应式设计**：适配桌面和移动设备的各种屏幕尺寸
- **现代化UI**：采用渐变背景、卡片式布局和流畅的交互体验
- **快速操作**：提供清空输入、格式化等便捷功能

## 🚀 快速开始

### 在线预览

项目已部署并可在线访问：[JSON & XML 格式化工具](http://localhost:4173/)（本地开发预览）

### 本地开发

```bash
# 克隆项目
https://github.com/your-username/json-xml-formatter.git
cd json-xml-formatter

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📋 安装指南

### 前提条件

- **Node.js**: v20.19.0 或更高版本
- **npm**: v10.0 或更高版本

### 安装步骤

1. **克隆项目仓库**
   ```bash
   git clone https://github.com/your-username/json-xml-formatter.git
   cd json-xml-formatter
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **构建项目**
   ```bash
   npm run build
   ```
   构建成功后，项目将在 `dist` 目录生成优化后的生产文件。

## 🎯 使用指南

1. **选择格式类型**：点击JSON或XML按钮选择要格式化的输入类型
2. **输入内容**：在输入框中粘贴要格式化的JSON或XML文本
3. **点击格式化**：点击"格式化"按钮处理输入内容
4. **查看结果**：格式化后的内容将显示在结果区域，并带有语法高亮
5. **复制结果**：点击"复制"按钮将格式化后的内容复制到剪贴板
6. **清空输入**：点击"清空"按钮重新开始

## 🏗️ 项目架构

项目采用现代化的前端架构，基于React和Vite构建，主要组件和文件结构如下：

### 目录结构

```
├── public/            # 静态资源文件
├── src/               # 源代码目录
│   ├── App.jsx        # 主应用组件
│   ├── App.css        # 应用样式
│   ├── index.css      # 全局样式
│   ├── main.jsx       # 应用入口文件
│   └── assets/        # 资源文件
├── .gitignore         # Git忽略文件
├── package.json       # 项目配置和依赖
├── vite.config.js     # Vite配置文件
└── README.md          # 项目说明文档
```

### 核心组件和功能

1. **App.jsx**：实现主要业务逻辑和用户界面
   - **状态管理**：使用React Hooks管理应用状态
   - **格式化逻辑**：实现JSON和XML的格式化和验证
   - **用户交互**：处理用户输入和操作事件

2. **样式系统**：采用CSS变量和现代CSS特性
   - **响应式设计**：适配不同屏幕尺寸
   - **主题化**：通过CSS变量实现一致的视觉风格

3. **外部依赖**：
   - **React**：用于构建用户界面的JavaScript库
   - **Vite**：现代前端构建工具
   - **react-syntax-highlighter**：提供语法高亮功能

## 🚢 部署指南

### 开发环境部署

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 服务器将运行在 http://localhost:5173/
```

### 生产环境部署

#### 方法1：使用静态文件服务器

```bash
# 全局安装 serve
npm install -g serve

# 构建项目
npm run build

# 提供静态文件服务
serve -s dist -l 3000
# 服务器将运行在 http://localhost:3000/
```

#### 方法2：使用Nginx部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **创建Nginx配置文件**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           root /path/to/json-xml-formatter/dist;
           index index.html;
           try_files $uri $uri/ /index.html;  # 支持SPA路由
       }
   }
   ```

3. **重启Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

#### 方法3：使用PM2管理进程

```bash
# 全局安装PM2
npm install -g pm2

# 安装serve
npm install serve --save

# 使用PM2运行应用
npm run build
npm install serve
npx pm2 start npx --name "json-xml-formatter" -- serve -s dist -l 3000

# 设置开机自启
npx pm2 startup
sudo env PATH=$PATH:/home/your-user/.nvm/versions/node/v20.19.5/bin /home/your-user/.nvm/versions/node/v20.19.5/lib/node_modules/pm2/bin/pm2 startup systemd -u your-user --hp /home/your-user

# 保存当前进程列表
npx pm2 save
```

## 🐳 Docker部署

虽然本项目是纯静态网站，但也可以使用Docker进行容器化部署：

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

构建和运行Docker容器：

```bash
# 构建Docker镜像
docker build -t json-xml-formatter .

# 运行Docker容器
docker run -p 8080:80 json-xml-formatter
# 应用将运行在 http://localhost:8080/
```

## 🛠️ 开发指南

### 开发环境设置

1. 确保安装了Node.js v20.19.0或更高版本
2. 克隆项目并安装依赖
3. 运行开发服务器进行开发

### 代码规范

- 使用ESLint进行代码质量检查
- 遵循React最佳实践
- 保持组件的单一职责
- 编写清晰的注释

### 测试

```bash
# 运行ESLint检查
npm run lint
```

## 🤝 贡献指南

我们欢迎并感谢社区贡献！如果你想为这个项目做出贡献，请按照以下步骤操作：

1. Fork项目仓库
2. 创建你的功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交你的更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 开启Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 💬 联系我们

如果你有任何问题、建议或反馈，欢迎联系我们：

- 项目维护者：[your-username](https://github.com/your-username)
- GitHub Issues：[https://github.com/your-username/json-xml-formatter/issues](https://github.com/your-username/json-xml-formatter/issues)

---

感谢使用JSON & XML 格式化工具！如果这个项目对你有帮助，请给我们一个⭐️支持！
