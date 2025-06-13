const ticket =new Promise((resolve,reject)=>{
   const iborded=true;
   if(iborded){
    resolve('You are not in the flight');
   
   }else{
    reject('Your flight has been cancelled')
   }
})



ticket.then((data)=>{
    console.log('wohooo',data);
    
}).catch((data)=>{
    console.log("oh no ",data);
    
}).finally(()=>{
    console.log('I will always be execute');
    
})
