import { error } from 'console';
import fs from 'fs';
fs.writeFile('./abc2.txt',"Im in asychronous file",(err)=>{
    err? console.log(error):console.log("Operation success.....");
})
console.log("at the end");
