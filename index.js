const fs = require('fs')
const http = require('http');
const { url } = require('inspector');
const { add } = require('nodemon/lib/rules');

const login = fs.readFileSync('./template/login.html','utf-8');
const dataJson = fs.readFileSync('./data/data.json','utf-8')

let dataAr = JSON.parse(dataJson)

function renderHtml(html,obj){
    let out = html;
    out = out.replace('{imgProduct}',obj.image);
    out = out.replace('{nameProduct}',obj.nameProduct);
    out = out.replace('{priceProduct}',obj.price);
    out = out.replace('{categoryProduct}',obj.category);
    out = out.replace('{countSoldProduct}',obj.countSold);
    return out
}

const server = http.createServer((req,res) =>{
    const urlcha = req.url
    if (urlcha === '/home'){
        const card = fs.readFileSync('./template/card.html','utf-8');
        let home = fs.readFileSync('./template/home.html','utf-8');
        // home = home.replace('{urlImg}','');
       const cardArr =  dataAr.map(val =>{
         return   renderHtml(card,val)
            
        }).join('')
        console.log(cardArr)
        home = home.replace('{cardProduct}',cardArr)
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