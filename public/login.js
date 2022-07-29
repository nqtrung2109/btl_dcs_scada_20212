/* var mysql = require('mysql2') 





var valid = false;

var arrayUsernames = [];
var arrayPasswords = []; */


/* var { arrayUsernames } = require("./index.js");
var { arrayPasswords } = require("./index.js"); */

/* import { arrayUsernames } from "./index.js";
import { arrayPasswords } from "./index.js"; */

//isValidLogin(username, password);





/* var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'windpower'
});

con.connect(function (err) {
    if (err) throw err
    console.log("mysql connected")
    var login = "CREATE TABLE IF NOT EXISTS login(ID int(10) not null primary key auto_increment,Username varchar(50) not null,Pass varchar(50) not null)"
    con.query(login, function (err) {
        if (err) throw err
        console.log("Table created")
    });
})


con.query(sql_login, function (err, result) {
    if (err) throw err
    console.log("Data selected");
    //console.log(result[0].Username);
    result.forEach(function (value13) {
        console.log(value13)
        tendangnhap = value13.Username
        matkhau = value13.Pass
        arrayUsernames.push(tendangnhap);
        arrayPasswords.push(matkhau);
        console.log("ten: " + tendangnhap + " / mk:  " + matkhau);
        console.log(arrayUsernames);
        console.log(arrayPasswords);
    })

})
//https://www.w3schools.com/nodejs/nodejs_mysql_select.asp




function isValidLogin(username, password) {

    for (var i=0; i <arrayUsernames.length; i++) {
        if ((username == arrayUsernames[i]) && (password == arrayPasswords[i])) {
            valid = true;
            break;  
        }
    }
    


    if(valid) {
        alert("Login Successful!");
    } else {
        alert("invalid credentials");
    }
} */

//import { isValidLogin } from "./index.js"

document.querySelector("#loginButton").addEventListener("click", ( )=>{
    console.log("ham querySelector");

    var username = document.querySelector("#usernameLogin").value;
    var password = document.querySelector("#passwordLogin").value;
    isValidLogin(username, password);
});

