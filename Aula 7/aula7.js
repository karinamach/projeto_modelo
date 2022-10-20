class Erro extends Error {
    constructor(message) {
        super(message)
        this.name = "Erro na Entrada de Dados"
    }
}

const msg = '{"tipo":"luis"}'

try {

    const { tipo } = JSON.parse(msg)

    if (tipo == "luis") {
        console.log('Seja Bem Vinda')
    }
    else {
        throw new Erro('Usuário não Encontrado')
    }
}
catch (error) {
    console.log(error.name)
    cconsole.log(error.message)
}