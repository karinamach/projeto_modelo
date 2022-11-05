// Falso ou verdadeiro
const msg = new Promise((resolve,reject)=>{
    try{
        if(Math.random() < 0.5){
            resolve()
        }
        else{
            reject()
        }
    }
    catch(e){}
})

msg
    .then((parametros)=>console.log("Resposta Correta"))
    .catch((erro)=>console.log("Resposta Errada"))