//parametros de funcao

function soma(num1, num2){
    return num1+num2;
}

console.log(soma(110,20))

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}
console.log("18","Carlos") //A ordem importa!

function multiplica(numero1=1, numero2=1){//esse = define um valor padrao
    return numero1*numero2;
}

console.log(multiplica(soma(4, 5),soma(3, 3)))
console.log(multiplica(9)) //caso esteja sem um valor padrao retorna NaN pois fica como undefined

//argumentos x parametros
//Na pratica se referem a mesma coisa mas algumas documentacoes se referem a parametros no momento em que a funcao é definida e os argumentos como os dados colocados nela