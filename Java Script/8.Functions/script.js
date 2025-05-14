const a = 12;
const b = 4;
sum(a,b);


const c= 2;
const d = 24;
sum(c,d); 
// multiply(c,d);    


const e =5;
const f = 14;
const result=sum(e,f); 
console.log('the returned result is ',result);   



function sum (a,b){
    const sum=a+b;
    console.log('the result is ',sum);
    // return sum;
}

const sqare = function (num){
    return num*num; 
}


console.log(sqare);


console.log(sqare(5));


// function multiply(a,b){
//     const multiply=a*b;
//     console.log('the result of multiple ',multiply); 
// }