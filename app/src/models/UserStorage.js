"use strict";


class UserStorage {
    static #users = {      // #  <--- 은닉화 할때 쓰는것!
        id: ["jungIT", "정개발", "정팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나팀장", "우리팀"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=> {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;