const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7,4.5,8,7.5]
        //quero que retorne nome!//1 parametro retorna nome e o segundo o indice
const reprovados = nomes.filter( (_/*aluno*/,indice) => notas[indice]<6) //todos os dados que concordarem com o filtro seram armazenados em reprovados
                                    //como nao vai ser usado o nome do aluno o padrao JS é se colocar _ 
console.log(reprovados)