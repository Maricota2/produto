const empresas=[
    {nome:'Sansung',valorDeMercado:50,CEO:'Kim  Hyun Suk',anoDeCriaçao:1938},
    { nome:'Microsoft',valorDeMercado:415,CEO: 'Satya Nadella',anoDeCriaçao:1975},
    {nome:'Facebook',valorDeMercado:383,CEO:'Mark Zuckerberg',anoDeCriaçao:2004},
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 2012},
    {nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 20006},

];

empresas.anoDeCriacao//acessar ano de criaçao

const anoDeCriacao=empresas.filter(empresas=>(empresas.anoDeCriaçao>2000))//exibir apenas ano de criaçao maior q 2000
 const nome=empresas.filter(empresas=> (empresas.nome='Apple'))
 const CEO=empresas.filter(empresas=>(empresas.CEO='Tim Cook'))


 console.log(anoDeCriacao)
 console.log(nome)
 console.log(CEO)


 console.log(Resposta)