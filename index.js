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
    res.send(`Internal IP: ${internalIP}, External IP: ${externalIP}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
