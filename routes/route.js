const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 정적 파일 서빙 설정
router.use(express.static(path.join(__dirname, '..', 'public')));
// 정적 파일 서빙 설저을 할 때 '/public'을 사용하닌 경로 설정에 문제가 생겼다.
// router.use('/public', express.static(path.join(__dirname, '..', 'public')));

// 라우트 설정
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;