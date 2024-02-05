# 기본 이미지로 Node.js를 사용합니다.
FROM node:16

# 작업 디렉토리를 설정합니다.
WORKDIR /usr/src/app

# 종속성을 먼저 설치합니다.
COPY package*.json ./

RUN npm install

# 소스 코드를 복사합니다.
COPY index.js ./

# 앱을 실행합니다.
EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
