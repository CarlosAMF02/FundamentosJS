const notas = [10,9,8,7,6]
const notasAtualizadas = notas.map(nota=> nota == 10 ? nota : ++nota)
                                                                //adiciona 1 e retorna nota
//map retorna como nova array, ja forEach só executa!

console.log(notasAtualizadas)
