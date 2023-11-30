const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./routes/route');
const app = express();
const port = 9797;

// 라우트를 관리하는 파일에서 모듈화 한 라우트 사용하기
app.use('/', route);

// 정적 파일 제공
// app.use(express.static(path.join(__dirname, 'public')));

// // 모든 요청에 대해 index.html 제공
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
});
