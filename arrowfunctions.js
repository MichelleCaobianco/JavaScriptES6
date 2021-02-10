var sum = function (a,b){
   return a + b;
};

console.log(sum(5,4));

//arrow functions

var sumNew = (a,b) => a+b;

console.log(sum(5,5));

var createObj = () => ({test: 123});
console.log(createObj());

var obg = {
    showContext: function showContext () {
        console.log(this);
    },
    log: function log(value){
        console.log(value);
    }
};
