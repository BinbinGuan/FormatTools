# FormatTools - JSON & XML 格式化工具

![FormatTools](https://img.shields.io/badge/FormatTools-JSON%20%26%20XML%20Formatter-green)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.4-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Stars](https://img.shields.io/github/stars/BinbinGuan/FormatTools?style=social)

一个功能强大、界面美观的JSON和XML格式化工具，帮助开发者快速格式化、验证和美化JSON与XML数据，提升开发效率。

## ✨ 功能特点

- **双格式支持**：同时支持JSON和XML格式的格式化、验证与美化
- **实时语法高亮**：使用专业的代码高亮显示，提升代码可读性
- **智能错误处理**：提供清晰的语法错误提示和定位
- **一键复制**：快速复制格式化后的代码到剪贴板
- **响应式设计**：完美适配桌面和移动设备的各种屏幕尺寸
- **现代化UI**：采用渐变背景、卡片式布局和流畅的交互体验
- **快速操作**：提供清空输入、格式化等便捷功能按钮

## 🚀 快速开始

### 在线预览

项目已开源并可在GitHub上获取：[FormatTools](https://github.com/BinbinGuan/FormatTools)

### 本地开发

```bash
# 克隆项目
git clone git@github.com:BinbinGuan/FormatTools.git
cd FormatTools

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
   git clone git@github.com:BinbinGuan/FormatTools.git
   cd FormatTools
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

## 🚢 Linux服务器部署指南

FormatTools项目作为一个纯静态网站，可以在Linux服务器上通过多种方式进行部署。以下是详细的部署步骤：

### 前提条件

在开始部署之前，请确保您的Linux服务器满足以下要求：

- 操作系统：Ubuntu 20.04+/CentOS 7+/Debian 10+
- 具有sudo/root权限
- 已安装Git
- 已安装Node.js v20.19.0或更高版本
- 已安装npm v10.0或更高版本

### 方法1：使用Nginx部署（推荐）

Nginx是一个高性能的Web服务器，非常适合部署静态网站。

#### 步骤1：安装Nginx

```bash
# Ubuntu/Debian系统
sudo apt update
sudo apt install nginx -y

# CentOS/RHEL系统
sudo yum install epel-release -y
sudo yum install nginx -y

# 启动并设置开机自启Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### 步骤2：克隆项目并构建

```bash
# 克隆项目到服务器
git clone git@github.com:BinbinGuan/FormatTools.git
cd FormatTools

# 安装依赖
npm install

# 构建项目
npm run build

# 查看构建结果ls -la dist/
```

#### 步骤3：配置Nginx

```bash
# 创建Nginx配置文件
sudo nano /etc/nginx/conf.d/formattools.conf
```

将以下内容粘贴到配置文件中（根据您的实际情况修改）：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # 替换为您的域名或服务器IP
    
    location / {
        root /path/to/FormatTools/dist;  # 替换为实际的项目路径
        index index.html;
        try_files $uri $uri/ /index.html;  # 支持SPA路由
    }
    
    # 可选：添加gzip压缩优化性能
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;
    
    # 可选：添加安全头部
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
}
```

保存并关闭文件（Ctrl+O, Ctrl+X）。

#### 步骤4：验证并重启Nginx

```bash
# 验证Nginx配置是否正确
sudo nginx -t

# 如果配置正确，重启Nginx
sudo systemctl restart nginx

# 查看Nginx状态
sudo systemctl status nginx
```

#### 步骤5：配置防火墙

```bash
# Ubuntu/Debian系统（使用ufw）
sudo ufw allow 'Nginx HTTP'
sudo ufw reload

# CentOS/RHEL系统（使用firewalld）
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

现在您应该可以通过浏览器访问您的域名或服务器IP来查看FormatTools应用了。

### 方法2：使用PM2和serve部署

如果您偏好使用Node.js生态系统工具进行部署，可以使用PM2管理serve进程。

#### 步骤1：安装PM2

```bash
# 全局安装PM2
npm install -g pm2
```

#### 步骤2：克隆项目并构建

```bash
# 克隆项目到服务器
git clone git@github.com:BinbinGuan/FormatTools.git
cd FormatTools

# 安装依赖
npm install

# 安装serve
npm install serve --save

# 构建项目
npm run build
```

#### 步骤3：使用PM2运行应用

```bash
# 使用PM2启动serve服务
npm install serve
npx pm2 start npx --name "formattools" -- serve -s dist -l 3000

# 查看PM2运行状态
pm2 status
```

#### 步骤4：设置开机自启

```bash
# 生成PM2开机自启脚本
npx pm2 startup

# 按照提示执行生成的命令，类似：
sudo env PATH=$PATH:/home/your-user/.nvm/versions/node/v20.19.5/bin /home/your-user/.nvm/versions/node/v20.19.5/lib/node_modules/pm2/bin/pm2 startup systemd -u your-user --hp /home/your-user

# 保存当前进程列表
npx pm2 save
```

#### 步骤5：配置防火墙

```bash
# 允许3000端口访问
# Ubuntu/Debian系统
sudo ufw allow 3000/tcp
sudo ufw reload

# CentOS/RHEL系统
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

现在您可以通过 http://your-server-ip:3000 访问FormatTools应用了。

### 方法3：使用Docker容器化部署

如果您使用Docker，可以通过容器化方式快速部署FormatTools。

#### 步骤1：安装Docker

```bash
# Ubuntu/Debian系统
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# CentOS/RHEL系统
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# 安装完成后需要重新登录使用户组更改生效
```

#### 步骤2：克隆项目并创建Dockerfile

```bash
# 克隆项目到服务器
git clone git@github.com:BinbinGuan/FormatTools.git
cd FormatTools

# 创建Dockerfile
nano Dockerfile
```

将以下内容粘贴到Dockerfile中：

```dockerfile
# 使用Node.js镜像进行构建
FROM node:20-alpine AS builder
WORKDIR /app

# 复制package文件并安装依赖
COPY package*.json ./
RUN npm install

# 复制源代码并构建
COPY . .
RUN npm run build

# 使用Nginx镜像运行
FROM nginx:alpine

# 复制构建结果到Nginx目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制自定义Nginx配置（可选）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]
```

保存并关闭文件。

#### 步骤3：构建并运行Docker容器

```bash
# 构建Docker镜像
docker build -t formattools .

# 运行Docker容器
docker run -d -p 80:80 --name formattools-app formattools

# 查看容器运行状态
docker ps
```

#### 步骤4：配置防火墙

```bash
# 允许80端口访问
# Ubuntu/Debian系统
sudo ufw allow 80/tcp
sudo ufw reload

# CentOS/RHEL系统
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --reload
```

现在您可以通过 http://your-server-ip 访问FormatTools应用了。

### 部署后的维护

```bash
# 更新项目
cd FormatTools
git pull
npm install
npm run build

# 根据部署方式重启服务
# Nginx
sudo systemctl restart nginx

# PM2
npx pm2 restart formattools

# Docker
docker stop formattools-app
docker rm formattools-app
docker build -t formattools .
docker run -d -p 80:80 --name formattools-app formattools
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

1. Fork项目仓库 [FormatTools](https://github.com/BinbinGuan/FormatTools)
2. 创建你的功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交你的更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 开启Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 💬 联系我们

如果你有任何问题、建议或反馈，欢迎联系我们：

- 项目维护者：[BinbinGuan](https://github.com/BinbinGuan)
- GitHub Issues：[https://github.com/BinbinGuan/FormatTools/issues](https://github.com/BinbinGuan/FormatTools/issues)

---

感谢使用FormatTools - JSON & XML 格式化工具！如果这个项目对你有帮助，请给我们一个⭐️支持！
