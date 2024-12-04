import http from "http";
const server = http.createServer((request,response)=>{
    console.log("start server");
    console.log(request.url);
    
    
//    if(request.url == "/home"){
//      response.write("<h1>Home Page</h1>");
//      response.write("<a href='/about'>About</a>");
//    }else if(request.url == "/about")
//      response.write("<h1>About Page</h1>");
//    else if(request.url == "/contact")
//      response.write("<h1>Contact Page</h1>");
//    else
//      response.write("<h1 style='color:red'>404 Requested resource not found</h1>")      
   response.end();
});

server.listen(3002,()=>{
    console.log("Server Started...");
});