var file=require('fs')
file.appendFile("file.js",'console.log("welcome in SGGS")',function(err,data){
    console.log("data")
})