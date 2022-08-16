class Stopwatch{
    constructor(displayText){
        this.displayText = displayText;
    }

    start(){
        var num = 0;
        var timer = setInterval(function(){
            num++
            if(num < 10){ //less than 10 seconds
                displayText.innerHTML = `00:0${num}`;
            }
            else if(num >= 10 && num < 60){ //p to 10 seconds
                displayText.innerHTML = `00:${num}`;
            }
            else if(num > 60){//if it is up to minute
                let min = num / 60;
                if(min < 10){
                    min = "0" + String(min);
                }
                let sec = num % 60;
                if(sec < 10){
                    sec = "0" + String(sec);
                }
                displayText.innerHTML = `${min}:${sec}`;
            }
        }, 1000)

        this.timer = timer;
    } // end of start

    stop(){
        clearInterval(this.timer);
    }

    reset(){
        this.stop();
        displayText.innerHTML = "00:00";
    }
}


const parentElement = document.querySelector(".buttons");
const timepElement = document.querySelector(".hero__text");

var displayText = timepElement.querySelector(".timer");
var startButton = parentElement.querySelector(".start");
var stopButton = parentElement.querySelector(".stop");
var resetButton = parentElement.querySelector(".reset");

const stopwatch = new Stopwatch(displayText);

startButton.addEventListener('click', () =>{
    stopwatch.start();
})

stopButton.addEventListener('click', () => {
    stopwatch.stop();
})

resetButton.addEventListener('click', ()=>{
    stopwatch.reset();
})

