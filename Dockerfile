# 使用官方的 node:lts-alpine 作为基础镜像
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY ["package.json", "package-lock.json*", "./"]

# 安装项目依赖
RUN npm install --silent

# 复制应用程序代码
COPY . .

# 构建应用程序
RUN npm run build

# 使用 nginx 作为静态文件服务器
FROM nginx:alpine

# 复制构建的文件到 nginx 的默认静态文件目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
