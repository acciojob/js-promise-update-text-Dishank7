
let div = document.getElementById("output");

let prom = new Promise((resolve) => {
    resolve();
})

setTimeout(() => {
    prom.then(()=>{
     div.innerText = 'Hello, world!';
    })
}, 1000);
