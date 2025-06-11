// console.log('hello');

// setTimeout(function(){
//     console.log("This will excecute later ");

// },3000)


// console.log("world");
// console.log('three');



function getbread(callback) {
    setTimeout(() => {
        const bread = "🍞"
        console.log("Here is bread", bread);
        callback(bread);

    }, 200);



    function makedough(chese, callback) {
        setTimeout(() => {
            const dough = chese + "🥟";
            console.log('here is the dough', dough);
            callback(dough);
        }, 200);
    }

    function bakePizza(dough,callback) {
        setTimeout(()=>{
                const pizza =chese+"🍕";
console.log('here is the pizza', pizza);
callback(pizza); 
        },200);
    }

    getbread((bread) => {
        makedough(chese, (dough) => {
     bakePizza(dough,(  pizza)=>{
        console.log('here is the pizza', pizza);
     })
        })

    })





}




