
import fs from 'fs';
let d = fs.readFile("./xyz.txt","utf8",(err,data)=>{
    err?console.log(err):d=data;  
});
setTimeout(()=>{
    const arr = d.split(' ');
    const v = arr.filter(d =>{ 
        let a = d.charAt(0);
        if (a=== 'A'||a==='E'||a==='I'||a==='O'||a==='U'||a==='a'||a==='e'||a==='i'||a==='o'||a==='u')
        return a ;
     })
    console.log(v.length);   
},2000);//2