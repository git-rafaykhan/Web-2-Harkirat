// let counter = 0;
// function callBack() {
//     console.clear();
//     counter = counter + 1;
//     console.log(counter)
// }
// setInterval(callBack, 1);


// let counter = 0;
// function callBack(){
//     console.clear();
//     counter = counter + 1; 
//     console.log(counter);
//     setTimeout(callBack, 1000);
// }
// setTimeout(callBack, 1000);



// const fs = require('fs');
// function callback (err, data){
//     console.log(data);
// }
// const fileRes = fs.readFile('./a.txt', 'utf-8', callback)
// let count = 0
// for(let i=0; i< 10000000; i++){
//     count = count + i;
//     console.log(count);
// }


// const fs = require('fs');
// function callback (err, data) {
//     if(err){
//     console.log(err)
//     }
//     console.log("file has been written");
// }
// function fileWrite(path, data){
//     const fsW = fs.writeFile(path, data, 'utf-8', callback);
// }
// let data = "File has be wriiten again";
// fileWrite("./a.txt", data);