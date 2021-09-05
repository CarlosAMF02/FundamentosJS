function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//Arrow function
const apresentarArrow = nome=>`meu nome é ${nome}`;
const soma = (num1,num2)=>num1+num2;

//Arrow function com + de 1 linha de instrucao

const somaNumerosPequenos = (num1,num2) => {
    if (num1||num2 > 10) {
        return "somente de numeros 1 a 9";
    } else {
        num1 + num2;
    }
}

//Hoisting: arrow function se comporta como expressao, sempre o javaScript busca function ou var e as traz para o inicio do codigo