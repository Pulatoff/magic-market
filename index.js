const fs = require('fs')
const http = require('http')

const login = fs.readFileSync('./template/login.html','utf-8')

console.log(login)
const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(login)
})

server.listen('8000','127.0.0.1')