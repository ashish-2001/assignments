/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) =>{
        setTimeout(resolve, n);
    });
}
function callback(){
    console.log("This text is being printed after 3 second!");
}
wait(3000).then(callback)
module.exports = wait;
