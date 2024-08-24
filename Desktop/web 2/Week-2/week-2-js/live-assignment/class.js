

class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color
    }

     area() {
        return this.width * this.height;
    }

    paint(){
        return this.color;
    } 
}
const obj = new Rectangle(3, 5, "Red");
console.log(obj)
console.log(obj.area());
console.log(`The color is ${obj.paint()}`)


const map = new Map();
map.set("name", "Rafay");
map.set("age", 18);
console.log(map.get("name"));
console.log(map.get("age"));


// function wrapperSettimeout(cb){
//       setTimeout(cb, 3000);
// }

// function cb() {
//     console.log("Settimeout is called after 3s ");
// }
// wrapperSettimeout(cb);


function main (){
}
let p = new Promise(main);
console.log(p)