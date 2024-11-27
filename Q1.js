import fs from 'fs'
fs.writeFile("./xyz.txt","the lazy dog jump over the a quick brown fox",err=>
    err?console.log("error"):console.log("operation successful")   
)