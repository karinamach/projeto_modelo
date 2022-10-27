var nome=["Alessandro","Maria"]
var nasc=[2001,1966]

nome.push("Pedro")
nasc.push(2000)
console.log(nome)
console.log(nasc)

var cadastro=[ 
    {nome:"Alessandro",nasc:1970},
    {nome:"Maria",nas:1975}
]

cadastro.push({nome:"Pedro",nasc:2000})
for(var i=0; i<cadastro.length; i++){
    console.log(cadastro[i].nome,"",
    cadastro[i].nasc)
}