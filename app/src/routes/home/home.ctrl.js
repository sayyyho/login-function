"use strict";

const greeting = (req, res) =>{
    res.render("home/index");
};

const login = (req, res)=>{
    res.render("home/login");
};

module.exports = {
    greeting, // key만 입력하면 key : value가 key : key로 인식
    login,
};