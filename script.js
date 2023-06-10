const items = [
    {
        id: 0,
        nome: 'blusa',
        img: 'img/blusa.png',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'boné',
        img: 'img/boné.png',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'camiseta',
        img: 'img/camiseta.png',
        quantidade: 0
    },

]

inicializarLoja = () =>{
    var containerProdutos = document.getElementById('produtos')
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        <div class"produto-single">
        <img src="`+val.img+`"/>
        <p> `+val.nome+` </p>
        <div class"btn">
        <button> 
        <a key="`+val.id+`" href="#">Comprar<a/> </button>
        </div>
        </div>
        `
    })
}

atualizarCarrinho = () =>{
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = ''
    items.map((val)=>{
        if(val.quantidade > 0){
         containerCarrinho.innerHTML+= `

         <p> `+val.nome+` |  quantidade : `+val.quantidade+`
        
        `
}})

}

inicializarLoja()

var links = document.getElementsByTagName('a')

for(var i = 0; i< links.length; i++){
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key')
        items[key].quantidade++
        atualizarCarrinho()
        return false
    })
}