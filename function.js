function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    // mais de uma expressão tem que colocar return
    return 'Code here';
}

// functions também são objetos
fn.prop = 'Posso criar propriedades!';

console.log(fn());
console.log(fn.prop);

// receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar functions
//const controlFnExec => fnParam => allowed => {
//    if(allowed) {
//        fnParam();
//    }
//}

//const handleFnExecution = controlFnExec(fn);

//handleFnExecution(true); //executa a function
//handleFnExecution(); //não executa a function