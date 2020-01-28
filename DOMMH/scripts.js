
document.addEventListener("DOMContentLoaded", function () {


let button = document.createElement("button");
button.innerHTML = "Click it";

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("You did it!");
});

let textBox = document.getElementById('form')
submit.addEventListener('click', myFunctionTwo);
function myFunctionTwo() {
    alert(form.value);
}

let square = document.getElementsByTagName('div')

square[0].addEventListener('mouseover', function(){
    square[0].style.backgroundColor = 'red'
})
square[0].addEventListener('mouseout', function(){
    square[0].style.backgroundColor = 'white'
});

let colors = ['red', 'blue', 'green'];

let pTag = document.getElementById('pTag');

pTag.addEventListener('click', () => {
let randomColor = Math.floor(Math.random() * colors.length);
pTag.style.color = colors[randomColor]

})

// let btn = document.createElement("button");
// btn.innerHTML = "CLICK ME";
// document.body.appendChild(btn);  

// let x = document.createElement("span");

});


