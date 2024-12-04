import fs from 'fs';
let data ;
 fs.readFile("./xyz.txt","utf8",(err,x)=>{
    err?console.log(err):data=x;
})

setTimeout(()=>{
    let a = data.split(" ");
    let len =a.find((a)=>{
        if(a.length>4){
            return a ;
        }
    });
    console.log("Maximum length words are:"+len)  
},1000);