function getchess() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chese = "🧀"

            resolve(chese);

        }, 200)
    })
}



function makedough(chese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = chese + "🥟"

            resolve(dough);

        }, 200)
    })
}



function backepizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕"
            resolve(pizza);

        }, 200)
    })
}




async function orderedpizza() {

    try {
    const chese = await getchess()
    console.log('Here is the chese', chese);


    const dough = await makedough(chese)
    console.log('Here is the dough', dough);


    const bakePizza = await backepizza(dough)
    console.log('Here is the pizza', bakePizza);

    }catch(error){
        console.log("error occured",error);
    }  
    console.log("process ended"); 
}


orderedpizza();

// getchess().then((chese) => {
//     console.log('Here is the chese', chese);
//     return makedough(chese);
// }).then((dough) => {
//     console.log('Here is the dough', dough);
//     return backepizza(dough);
// }).then((pizza) => {
//     console.log('Here is the pizza', pizza);
// }).catch((data)=>{
//     console.log("error occured",data);
// }).finally(()=>{
//     console.log("process ended");
// })()