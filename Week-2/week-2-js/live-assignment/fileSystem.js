const fs = require('fs');

console.log("Starting");

setTimeout(() => {
    console.log("This is the Web Apis function");
}, 5000);


function read(err, data){
    console.log(data)
}
const fileData = fs.readFile('./a.txt', 'utf-8', read);
const fileData2 = fs.readFile('./a2.txt', 'utf-8', read);

let c = 0
for(let i=0; i< 10000000000; i++){
    c++;
}
console.log(c);

console.log(fileData);
console.log(fileData2);



