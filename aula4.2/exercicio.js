//exemplo para ir de letra a letra
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) { //vai acessar letra por letra
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) 

const arrayNums = [1, 2, 3, 4]

function multiplicar10(num){
    return num*10
}

const arrayMultiplicada = arrayNums.map(multiplicar10)
//const arrayMultiplicada = arrayNums.map(num => num*10) realiza a mesma funcao!
console.log(arrayMultiplicada)
