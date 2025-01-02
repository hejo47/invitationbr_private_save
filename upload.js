const ftp = require("basic-ftp");
const path = require("path");
require("dotenv").config();

async function uploadBuild() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    // FTP 서버에 접속
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      port: process.env.FTP_PORT,
      secure: false, // 필요에 따라 true로 변경
    });

    // 로컬 빌드 디렉터리 경로
    const buildPath = path.resolve(__dirname, "build");
    const remoteDir = process.env.FTP_REMOTE_DIR; // /boram/marriageday.co.kr 형태로 설정

    // 디렉토리 확인
    await client.cd("/boram/marriageday.co.kr");

    // 원격 디렉터리로 이동
    await client.cd(remoteDir); // 상대 경로로 변경 시 cd() 사용

    // 로컬 빌드 폴더에서 원격 디렉터리로 파일 업로드
    await client.uploadFromDir(buildPath);
    console.log("Upload complete!");
  } catch (error) {
    console.error("FTP upload failed:", error);
  } finally {
    client.close(); // 업로드가 완료된 후 연결 종료
  }
}

// 스크립트 실행
uploadBuild();
