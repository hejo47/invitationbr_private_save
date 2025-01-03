const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/login', async (req, res) => {
  try {
    const { phone, password } = await request.json();
    const url = "https://app.boram.com/InvitationApi/login_process";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone, password })
    });

    if (!response.ok) {
        return NextResponse.json(
            { message: "외부 API에 접속하는 중 오류가 발생했습니다." },
            { status: 500 }
        );
    }

    const data = await response.json();

    res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인을 허용
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});