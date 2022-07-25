"use strict";

const users = {
    id: ["jungIT", "정개발", "정팀장"],
    psword: ["1234", "1234", "123456"],
};


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                })
            }
        }


        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
}

module.exports = {
    output,
    process,
};            // object 형식의  디폴트가   ex {key : value}   --->>> { hello : hello} 로 되어 있음 
                                //        {
                                //         hello: value
                                //         login: value
                                //        }