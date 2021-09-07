const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo' ]
                        //0:10 mas n pega o indice 10
const sala1 = nomes.slice(0,nomes.length/2)//indice que comeca, indice que acaba - 1
const sala2 = nomes.slice(nomes.length/2)//se deixar o segundo espaco sem nada considera ate o final

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);