"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

    loginBtn.addEventListener("click", login);
    
    function login() {
        if(!id.value) return alert('아이디를 입력해주세요.');
        if(!psword.value) return alert('비밀번호를 입력해주세요.');

        const req = {
            id: id.value,
            psword: psword.value,
        };

        console.log(req, JSON.stringify(req))
        console.log(JSON.stringify(req))


        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";
            }else {
                if(res.err) return alert(res.err);
                alert(res.msg);
            }
        
        })
        .catch((err)=> {
            console.error(new Error('로그인중 에러발생'));
        })
    }


