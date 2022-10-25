var valor=[100,50,120,20,500]
// var desconto=[]
//for(var i=0; i<valor.length; i++){
//    desconto.push(valor[i]*0.90)
//}
//console.log(valor)
//console.log(desconto)

var desconto = valor.map(valor=>{  
    return valor*0.90
})
console.log(valor)
console.log(desconto)