const salaJs = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(arrayNotas){
    const somaDasNotas = arrayNotas.reduce((acum,atual)=> atual+acum,0/*a virgula zero é o valor que vai ser iniciado*/ ) //primeiro é o acumulador e o segundo é o valor atual da nota
    return somaDasNotas/arrayNotas.length
}

console.log(`Média da sala de JS é de ${mediaSala(salaJs)}`)
console.log(`Média da sala de Java é de ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python é de ${mediaSala(salaPython)}`)

const notas = [10,6.5,8,7]

const media = notas.reduce((soma,nota)=>nota+soma,0)/notas.length
console.log(media)