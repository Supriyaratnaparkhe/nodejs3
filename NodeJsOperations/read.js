var file=require('fs')
file.readFile("./app3.js",'utf-8',function(err,data){
    console.log(data)
})