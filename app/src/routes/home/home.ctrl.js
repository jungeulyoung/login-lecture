"use strict";

                          //        {         
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
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};            // object 형식의  디폴트가   ex {key : value}   --->>> { hello : hello} 로 되어 있음 
                                //        {
                                //         hello: value
                                //         login: value
                                //        }