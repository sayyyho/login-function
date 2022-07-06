"use strict";

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
const PORT = 3000;
const home = require("./routes/home"); //라우팅

// 모듈 : app setting
app.set("views", "./views"); 
app.set("view engine", "ejs");


app.use("/", home); // use -> 미들웨어를 등록하는 메소드.

app.listen(PORT, ()=>{
    console.log("서버가동");
})