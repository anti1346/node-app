# 기본 이미지로 Node.js를 사용합니다.
FROM node:16

# 앱 디렉토리를 만들고 소스 코드를 복사합니다.
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# 앱을 빌드합니다.
EXPOSE 3000
CMD [ "node", "index.js" ]
