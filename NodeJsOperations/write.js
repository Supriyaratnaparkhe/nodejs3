var file=require('fs')
file.writeFile("file.js",'console.log("Hello")',function(err,data){
    console.log("data saved")
})