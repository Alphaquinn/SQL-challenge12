const mysql= require('mysql2');
const db = mysql.createConnection({
    host:'localhost',
    user:'apollo',
    password:'Tyranitar48756//8',
    database:'employees'
});
module.exports=db




//user 'root' needs your personal pass
