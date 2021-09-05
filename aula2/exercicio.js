var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi) //como pi é uma constante ele continuara sendo 3.14 fora do bloco e idade
    //idade por ser let fora do bloco sera 29, devido a let poder ser reatribuida mas apenas no mesmo escopo
    //ja repostaDeTudo por ser var pode ser reatribuida dentro ou fora do escopo, retornando 3.14 fora do bloco!

}
console.log(respostaDeTudo, idade, pi)

