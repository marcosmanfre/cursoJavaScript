const saudacao = 'Opa'  // contexto léxico 1

function ola() {
    const saudacao = 'Falaa'  // contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua tal',
        numero: 123
    }
}
console.log(saudacao)
console.log(ola())
console.log(cliente)