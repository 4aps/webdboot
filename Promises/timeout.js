function promisifiedSetTimeOut(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

promisifiedSetTimeOut(2000).then(() => {
    console.log("Waited  for 2 seconds!")
});