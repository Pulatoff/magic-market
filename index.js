const fs = require('fs')
const http = require('http');
const { url } = require('inspector');
const { add } = require('nodemon/lib/rules');

const login = fs.readFileSync('./template/login.html','utf-8');

const server = http.createServer((req,res) =>{
    const urlcha = req.url
    if (urlcha === '/home'){
        const home = fs.readFileSync('./template/home.html','utf-8');
        // home = home.replace('{urlImg}','');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(home);
    }else if (urlcha === '/ownProdcuts'){
        const addProduct = fs.readFileSync('./template/addProduct.html','utf-8')
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(addProduct);
    }else{
        res.writeHead(200,{'Content-Type':'text/html'})
    res.end(login)
    }
})


server.listen('8000','127.0.0.1')