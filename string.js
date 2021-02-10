//retorna o tamanho de uma string
const textSize = 'Teste'.length;
console.log('Quantidade de letras:',textSize);

//retorna um array quebrando a string por um delimitador
const splittedText = 'Teste'.split('s');
console.log('Array com as posições separadas por um delimitador:', splittedText);

//busca por um valor e substitui por outro
const replacedText = 'Teste'.replace('Teste','Testando');
console.log('Substitui valor:', replacedText);

//retorna a "fatia" de um valor
const lastChar = 'Teste'.slice(-1);
console.log('Última letra de uma string:', lastChar);

const allWithoutLastChar = 'Teste'.slice(0,-1);
console.log('Todas as letras menos a última:', allWithoutLastChar);

const secondToEnd = 'Teste'.slice(1);

//retorna N caracteres a partir de posição
const twoCharsBeforeFirstPos = 'Teste'.substr(0,2);
console.log('As duas primeiras letras são:',twoCharsBeforeFirstPos);