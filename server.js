const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

// CORS 미들웨어 설정 (모든 출처 허용)
app.use(cors({
  origin: 'http://localhost:3000',  // 클라이언트 도메인
  methods: ['GET', 'POST'],  // 허용할 HTTP 메서드
  allowedHeaders: ['Content-Type'],  // 허용할 HTTP 헤더
}));

// POST 요청으로 로그인 요청을 중계하는 API 라우트
app.post('/proxy/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    // 외부 API에 요청 보내기
    const response = await fetch('https://app.boram.com/InvitationApi/login_process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, password }),
    });

    if (!response.ok) {
      throw new Error('로그인 요청에 실패했습니다');
    }

    const data = await response.json();
    res.json(data);  // 응답을 클라이언트에 반환
  } catch (error) {
    res.status(500).json({ error: 'API 요청 실패' });
  }
});

app.listen(5000, () => {
  console.log('서버가 5000번 포트에서 실행 중');
});