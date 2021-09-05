a = [];
b = 20;
c = true; 
d = ''; //String vazia é considerada false

if (this.d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (b === 20 && c != false && d == 0) {
    console.log(Number(d))//retorna 0!
    console.log('Verdade')
} else {
    console.log('Falso')
}//Verdade pois d é uma String vazia, sendo 0
