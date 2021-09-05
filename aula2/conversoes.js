// tipo de dado
// booleanos

//conversao implicita
const numero = 456;
const numeroString = "456";

console.log(numero+numeroString); //converte numero para String e faz uma concatenacao

//conversao explicita
//Number()
//String() => se usa antes da var, para usar dps pode ser var.toString()
console.log(numero + Number(numeroString)) //n pode ter nenhum caractere que nao seja um numero, pois tera como resultado NaN

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // converte a String para number se colocando o + antes das variaveis

let usuarioLogado = false;
console.log(Number(usuarioLogado)) //converte o boolean false em number (0)
usuarioLogado = true;
console.log(Number(usuarioLogado)) //converte o boolean true em number (1)




