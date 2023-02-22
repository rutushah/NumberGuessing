/**
 * Prepared By : Rutu Shah
 * Student ID :  2094023
 * Js for Number guessing
 */

//-----------------Variable Declaration Section----------------------

let btn = document.getElementById('btn');
let output =  document.getElementById('outputtext');
let score = document.getElementById('score');
let highScore = document.getElementById('highScore');
let guess = 20;
let highscore1;
let correct = document.querySelector('#container');


/**
 * The below function randomIntFromInterval is created
 * to generate the random number between 1 to 20
 */
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let number = randomIntFromInterval(1,20); // calling the random number
console.log(number);

/**
 *  Function called on button click
 */
function startGame(){
        let input = document.getElementById('userInput').value;
    
        if(input == ""){
            output.innerHTML = `<p style = "color:red"> Error!!! Please enter number </p>`;
        }else if(input < 1){
            output.innerHTML = `<p style = "color:red";> Error!!! Number should be between 1 and 20 </p>`;
        }else if(input > 20){
            output.innerHTML = `<p style = "color:red"> Error!!! Number should be between 1 and 20 </p>`;
        }else if(input < number){
            output.innerHTML = `<p style = "color:red"> You guessed too low! </p>`;
            score.innerHTML = `<p style = "color:white"> Score: ${guess = guess-1}</p>`;
        }else if(input > number){
            output.innerHTML = `<p style = "color:red"> You guessed too high number </p>`;
            score.innerHTML = `<p style = "color:white"> Score: ${guess = guess-1}</p>`;
        } else if(input == number){
            correct.style.backgroundColor = "#0fe2ad";
            highscore1 = guess;
            window.localStorage.setItem('highScore', `${highscore1}`);
            output.innerHTML = `<p style = "color:#010b01">  You guessed right, your number was ${number} </p>`;
            highScore.innerHTML = `<p style = "color:white"> HighScore: ${guess} </p>`;
        }
}

highScore.innerHTML = `<p style = "color:white" position:relative; left:10%> HighScore: ${window.localStorage.getItem(`highScore`)} </p>`;

//Change the color of input when user enters white
function changeColorOFInput(){
    document.getElementById("userInput").style.backgroundColor = "white";
}

//refresh the page when user clicks on again button
function refreshPage(){
    window.location.reload();
} 