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

    // 현재 시간을 KST로 변경하여 포맷팅
    const currentDate = new Date();
    const options = { timeZone: 'Asia/Seoul' };
    const formattedDateStr = currentDate.toLocaleString('ko-KR', options);

    res.send(`Hostname: ${hostname}\nInternal IP: ${internalIP}\nExternal IP: ${externalIP}\nCurrent Time: ${formattedDateStr}\n`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
