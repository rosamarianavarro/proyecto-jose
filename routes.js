var app = require("./app")
app.get("/pablo",function(req,res){
    res.send("<h1>Hola mundo</h1>")
    
})

app.get("/rosa",function(req,res){
    res.send("<h5>jajajaja</h5>")
})