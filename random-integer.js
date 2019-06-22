// get random integer
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//TRY THIS ONE FIRST 
var randomNumber = Math.floor(Math.random() * 2);

//console.log(getRndInt(0, 10));
//<button onclick="document.getElementById('demo').innerHTML = getRndInteger(0,10)">Click Me</button>