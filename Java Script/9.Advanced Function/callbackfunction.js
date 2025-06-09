const calculate =(a,b,operation)  =>{
    return operation(a,b);  
}

///method 1
const result=calculate(3,4, function(num1,num2){
    return num1+num2;   
})

console.log(result);

///method2
const subraction=(a,b)=> a-b;

const r2=calculate(3,4,subraction);

console.log(r2);
  ///mehod 3 


  function multiply(a,b){   
    return a*b;
  }

  const r3=calculate(multiply(3,4 )); 

  console.log(r3);