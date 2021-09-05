//var
/*
var altura = 5;
var comprimento = 7;

area = altura*comprimento;
console.log(area);
*/
/*let forma = "triangulo";
let altura = 5;
let comprimento = 7;
let area;

if(forma==="retangulo"){
    area=altura*comprimento;
} else {
    area = (altura*comprimento)/2;
}
console.log(area);*/

const forma = "triangulo";
const altura = 5;
const comprimento = 7;

let area; //constante precisa ter um valor e nao pode se alterar, ja let e var podem ser alterados! A var nao se usa tanto por ela ser muito solta

if (forma==="quadrado"){
    area=altura*comprimento;
} else {
    area=(altura*comprimento)/2
};

console.log(area);

