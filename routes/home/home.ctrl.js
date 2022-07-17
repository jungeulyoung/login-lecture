"use strict";

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
                                //         hello: value
                                //         login: value
                                //        }