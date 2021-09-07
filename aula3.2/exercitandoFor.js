const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10,7,9,6]
let somaNotas = 0

let listaDeNotasEAlunos=[alunos,mediaDosAlunos]
if (alunos.length===mediaDosAlunos.length){
    for (let i =0; i<listaDeNotasEAlunos[0].length;i++){
        console.log(`O aluno ${listaDeNotasEAlunos[0][i]} teve como nota ${listaDeNotasEAlunos[1][i]}`);
        somaNotas += listaDeNotasEAlunos[1][i]
        if (i===listaDeNotasEAlunos[0].length-1){
            console.log(somaNotas/listaDeNotasEAlunos[0].length>=7?`Parabens: A media da turma foi de ${somaNotas/listaDeNotasEAlunos[0].length}`:`Atencao: A media da turma foi de ${somaNotas/listaDeNotasEAlunos[0].length}`)
        }
    }
}else {
   if (alunos.length>mediaDosAlunos.length){
       console.error(`Erro: Há mais ${alunos.length-mediaDosAlunos.length} aluno(s) cadastrados do que notas!`)
   } else {
       console.error(`Há mais ${mediaDosAlunos.length-alunos.length} nota(s) cadastradas do que alunos`)
   }
}