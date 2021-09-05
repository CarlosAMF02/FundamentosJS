let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

//let pode ser alterada porem apenas dentro do escopo
{
    let minhaLet = "fora do escopo!"
    console.log(minhaLet)
}
console.log(minhaLet) //100