
let user = {
    name: "Mohit",
    age: 23
};
console.log(user.name);


let car = {
    brand: "BMW",
    speed: 120,
    drive: function () {
        console.log("Driving at " + this.speed + " km/h");
    }
};
car.drive();




function add(a, b) {
    return a + b;
}
console.log(add(10, 20));


const square = (n) => n * n;
console.log(square(5));



let div = document.getElementById("container");
div.innerText = "Hello Script";
div.style.color = "red";

let b = document.getElementById("btn");

b.addEventListener("click", function () {
    alert("Button clicked");
});

console.log(Hello)
console.log(Hello)

