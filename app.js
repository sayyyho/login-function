// http 모듈 활용 방식
// const http = require("http"); // 내장모듈
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" }) // 복잡한 과정....
//     if (req.url === "/"){
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("로그인 화면입니다.")
//     }

// });

// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버");
// });


const express = require("express");
const app = express();

app.get("/" , (req, res)=>{
    res.send("여기는 루트입니다.")
});

app.get("/login" , (req, res)=>{
    res.send("로그인화면입니다.")
})

app.listen(3000, ()=>{
    console.log("서버가동");
})