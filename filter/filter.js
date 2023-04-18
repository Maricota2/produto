const carrinho =[
    {nome: 'caderno', qntd: 10, preço: 8},
    { nome :'apontador', qntd:3,preço:5},
    { nome :'lapis', qntd:3,preço:5},
    {nome: 'borracha', qntd: 2, preço: 7.99},
    { nome :'tesoura', qntd:1,preço:6.90},
]
    const getProdutosEmEstoque=carrinho.filter(item=>item.qntd>1).map(item=>item.nome)

    const getProdutosEmEspecifico=carrinho.find(item=>item.qntd<3)

    console.log(getProdutosEmEstoque)
    console.log(getProdutosEmEspecifico)

    console.log(temEstoque)



//1-criar umm array 
//2-get associa uma propriedade de um objeto a funao que sera chamada
//3-filter-vai filtrar 
//4-map serve para fazer alteraçao nos items de um array 
//5-(item=>item.qntd>1) vai multiplicar os itens no array pela quantidade de produtos isso deve ser >1
//6-map(item=>item.nome) vai multiplicar a qnt dd itens pelo nome ***
//7-const getProdutosEmEspecifico=carrinho.find(item=>item.qntd<3) vai atender esa condiçao logo->caderno e este produto.Pois é o unico que atende esta condiçao 
//8-console.log serve para printar 
//9-const ->uma consante declarada 

