import fs from 'fs';
try{
    fs.writeFileSync('./abc.txt',"This is synchronous file ");
    console.log("Operation success....");
}
catch(error){
    console.log("error");
    
};
