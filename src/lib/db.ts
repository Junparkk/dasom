import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST, // .env 파일에서 로드
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;