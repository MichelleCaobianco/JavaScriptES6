const myNumber =  17.1089

//transformando o número em String
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

//retorna o número com número x de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Número com 2 casas decimais: ',fixedTwoDecimals);

//transforma string em float
console.log('String parseada para float: ', parseFloat("17.10"));

//transforma string em int
console.log('String parseada para int: ', parseInt("17.10"));