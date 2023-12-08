const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// JSON 데이터를 읽고 쓰기 위한 파일 경로
const jsonFilePath = path.join(__dirname, '..', 'petInfo', 'petInfo.json');

// 라우트 설정
router.get('/info', (req, res) => {
  // JSON 파일에서 데이터를 읽어와 전송
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading petInfo.json:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.json(JSON.parse(data));
  });
});

router.post('/info', (req, res) => {
  // POST 요청으로 받은 데이터를 JSON 파일에 저장
  const newData = req.body;

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading petInfo.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    const jsonData = JSON.parse(data);
    jsonData[newData.petName] = newData;

    fs.writeFile(jsonFilePath, JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to petInfo.json:', err);
        return res.status(500).send('Internal Server Error');
      }
      res.send('Data saved successfully');
    });
  });
});

module.exports = router;