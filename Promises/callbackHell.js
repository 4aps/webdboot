//Type-1

setTimeout(function(){
    console.log("hii");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("Hii there... Hell!!")
        }, 5000);
    }, 3000);
}, 1000);

console.log("Welcome to callback Hell: ");


//Type-2

function step3(){
    console.log("I am done!!")
}

function step2(){
    console.log("hello there >>>");
    setTimeout(step3, 5000);
}

function step1(){
    console.log("hii..");
    setTimeout(step2, 3000);
}

setTimeout(step1, 1000);


//Type-3


setTimeoutPromisified(1000)
.then(function(){
    console.log('One second has passed...')
    return setTimeoutPromisified(3000);
})
.then(function(){
    console.log('One + Three seconds has passed...')
    return setTimeoutPromisified(5000);
})
.then(function(){
    console.log('One + Three + Five seconds has passed...')
});

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
