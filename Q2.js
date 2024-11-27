import fs from 'fs'
let x = fs.readFile("./xyz.txt","utf8",(err,data)=>
{    err?console.log(err):x=data;    });
setTimeout(()=>{
    fs.writeFile("./pqr.txt",x,err=>{
        err?console.log(err):console.log("operation successful");       
    })
},1000);
