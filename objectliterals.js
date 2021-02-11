//antes do ES6

var prop1 = 'Digital Inovation One';

var obj = {
    prop1: prop1
};

console.log(obj);



//após ES6

var prop1 = 'Digital Inovation One, com ES6';

var obj = {
    prop1
};

console.log(obj);

function method1(){
    console.log('Method called with ES6');
}
var obj = {
    method1
};

obj.method1();

var objsum = {
    sum(a,b){
        return a+b;
    }
};

console.log(objsum.sum(1,5));