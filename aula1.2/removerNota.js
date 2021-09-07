const notas = [10, 7 ,8, 5, 10]
notas.pop() //deleta o ultimo elemento
console.log(notas)

media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length
console.log(`A media é ${media}`)

const notas2 = [2, 10]

console.log(notas.concat(notas2)) //nao altera notas
//notas.shift()//remove o primeiro valor
//notas.reverse() - inverte os arrays de posicao
//notas.sort()- organiza o array de acordo com a classificacao unicode, numeros antes de letras