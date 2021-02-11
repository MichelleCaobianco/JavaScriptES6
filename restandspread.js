// function normal
function sum(a,b){
    var value = 0;
    for (var i=0; i<arguments.length; i++){
        value += arguments[1];
    }
    return value;
}

console.log(sum(5,5,5,5,2,3));

//rest operator representado por '...'

function sumNew(...args){
    console.log(args);
    }
 console.log(sumNew(5,5,5,5,2,3));

 const sumRest = (a,b, ...rest) => {
     console.log(a,b,rest);
 };
 console.log(sumRest(5,5,5,5,2,3));
