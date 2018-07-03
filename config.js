var mysql = require("mysql")
var con = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"tareas"

    }
)//mysql
    con.connect(function(err){
        if(err)throw err;
        console.log("conectado");


    })

    module.exports = con;
