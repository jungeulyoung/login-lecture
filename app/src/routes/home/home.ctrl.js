"use strict";

<<<<<<< HEAD
const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home, 
    login,
};            // object 형식의  디폴트가   ex {key : value}   --->>> { hello : hello} 로 되어 있음 
                                //        {         
=======
const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};            // object 형식의  디폴트가   ex {key : value}   --->>> { hello : hello} 로 되어 있음 
                                //        {
>>>>>>> 7147acbbf4fb14374d7d2638687ac9de238846b7
                                //         hello: value
                                //         login: value
                                //        }