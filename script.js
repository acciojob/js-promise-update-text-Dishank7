
let div = document.getElementById("output");

let prom = new Promise((resolve) => {
    resolve();
})

setTimeout(() => {
    prom.then(()=>{
     div.innerText = 'Hello World';
    })
}, 1000);
