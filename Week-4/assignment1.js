// const fs = require('fs');

// function callback (err, data) {
//     console.log(data)
// }

// function countWords(filename){
//      fs.readFile(filename, "utf-8", callback)
// }
// countWords(process.argv[2]);

function countWords (words){
   let res = words.split('');
   let total = 0; 
   for(let i=0; i<res.length; i++) {
    total= total +1;
   }
   return total;
}
console.log(countWords(process.argv[2]));