"use strict";



const UserStorage = require("../../models/UserStorage");

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


        const users = UserStorage.getUsers( "id", "psword" );


        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                console.log(response);
                return res.json(response);
            }
        }


        response.success = false;
        response.msg = "로그인에 실패 했습니다."
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};            // object 형식의  디폴트가   ex {key : value}   --->>> { hello : hello} 로 되어 있음 
                                //        {
                                //         hello: value
                                //         login: value
                                //        }