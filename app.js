const http=require("http")
const user=process.env.DB_USER || "NO-USER"
const password=process.env.DB_PASSWORD || "no-password"
const message = process.env.APP_MESSAGE || "Default_Message"
http.createServer((req,res)=>{
    if(req.url=="/health"){
        res.write("ok")
        res.end()
        return
    }
    res.write(message + "\n")
    res.write("User: " + user +"\n")
    res.write("Password: "+password)
    res.end()
}).listen(3000)
console.log("server running")