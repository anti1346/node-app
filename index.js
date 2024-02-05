// index.js

const express = require('express');
const os = require('os');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.set('trust proxy', true); // 프록시 신뢰 설정

app.get('/', (req, res) => {
  const internalIP = os.networkInterfaces().eth0[0].address;
  
  // ifconfig.io를 사용하여 외부 IP 가져오기
  exec('curl ifconfig.io', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const externalIP = stdout.trim();
    const hostname = os.hostname(); // 호스트명 가져오기
    const currentTime = new Date().toLocaleString(); // 현재 시간 가져오기
    res.send(`Hostname: ${hostname}\nInternal IP: ${internalIP}\nExternal IP: ${externalIP}\nCurrent Time: ${currentTime}\n`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
