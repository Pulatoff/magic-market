function generatorAPI(){
    let id = 0;
    let data = [];
    
    
    class Product{
        constructor(name,id,image,price,descrition,countSold,category,rate,ownProduct){
            this.id = id;
            this.nameProduct = name;
            this.image = image;
            this.price = price;
            this.descrition = descrition;
            this.countSold = countSold;
            this.category = category;
            this.rate= rate;
            this.ownProduct = false;
        }
    }
    
    for(let i =1 ; i<=20;i++){

        let price = Math.floor(Math.random()*5000)
        let countSold = Math.floor(Math.random()*10000)
        let rate = Math.floor(Math.random()*5)
        let category = ['texnika','mebel','gullar','oquv qurolari','ichimliklar','oyichoqlar','kiyimlar']
        let categoryNumber = Math.round(Math.random()*6)
        const product = new Product('nameProduct',id,`https://picsum.photos/200/300?random=${id}`,price,'description',countSold,category[categoryNumber],rate)
        data.push(product)
        id++    
    }
    const json = JSON.stringify(data)
    fs.writeFileSync('./data/data.json',json,'utf-8')
}
