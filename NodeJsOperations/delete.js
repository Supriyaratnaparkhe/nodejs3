var file=require('fs')
file.unlink('./file.js',function(err){
    console.log("Deleted")
})