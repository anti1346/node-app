// index.js

const express = require('express');
const os = require('os');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.set('trust proxy', true); // 프록시 신뢰 설정

app.get('/', (req, res) => {
  // 내부 IP 가져오기
  const internalIP = os.networkInterfaces().eth0[0].address;
  
  // ifconfig.io를 사용하여 외부 IP 가져오기
  exec('curl ifconfig.io', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const externalIP = stdout.trim();

    // 호스트명 가져오기
    const hostname = os.hostname(); 

    // // 현재 시간을 YYYY.MM.DD HH:MM:SS 형식으로 포맷팅
    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    // const day = String(currentDate.getDate()).padStart(2, '0');
    // const hours = String(currentDate.getHours()).padStart(2, '0');
    // const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    // const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    // const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    // 현재 시간을 KST로 변경하여 포맷팅
    const currentDate = new Date();
    const options = { timeZone: 'Asia/Seoul' };
    const formattedDate = currentDate.toLocaleString('ko-KR', options);

    res.send(`Hostname: ${hostname}\nInternal IP: ${internalIP}\nExternal IP: ${externalIP}\nCurrent Time: ${formattedDate}\n`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
