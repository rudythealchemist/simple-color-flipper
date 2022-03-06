// colors used in app
const colors = ["green", "red", 'blue', 'yellow', "rgba(133,122,200)", "#f15025", 'orange'];
//selecting elements from html 
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//adding button funcionality
btn.addEventListener("click", function () {
    // console.log(document.body);//target body object
    const randomNumber = getRandomNumber(); // get randomNumber between 0 -3.
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//generate randomNumber from array(0-3)
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}