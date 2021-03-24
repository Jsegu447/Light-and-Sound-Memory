// global constants
//const clueHoldTime = 1000; how long to hold each clue's light/sound (changed for var)
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var seconds = 30;
var inter;
var strikes = 2;
var clueHoldTime = 1000;
var tonePlaying = false; //is a tone currently playing
var volume = 0.5;  //must be between 0.0 and 1.0
var pattern = [] //the secret sequence of the buttons(holds random sequence)
var progress = 0;  //index for the pattern array(what "level")
var gamePlaying = false; //is the game running?
var guessCounter = 0; //current clue the user is at

function createPattern(){
  for (let i = 0; i < 8; i++){
    var num = Math.floor(Math.random() * (6-1)+1);
    pattern.push(num);
  }
}
 

function setTime(){
seconds--;
          
  document.getElementById("timer").innerHTML = seconds + 's';
  if(seconds ===0){
    loseGame();
  }
}



function startGame(){
// swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
//initialize game variables
  inter = setInterval(setTime,1000);
 createPattern();
 console.log(pattern); //used to check created sequence
  progress = 0;
  gamePlaying = true;
  playClueSequence()
}

function stopGame(){
// swap the Stop and Start buttons
  clueHoldTime = 1000; //sets default time in case of another run
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
//end game
  inter = clearInterval(inter);
  seconds = 30; //reset time
  strikes = 2; //reset strikes
  pattern = []; //resets sequence in case of another run
  gamePlaying = false;
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 569.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){stopTone()},len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  seconds = 30; //reset timer each turn (large to accomadate sequence time)
  guessCounter = 0;
  clueHoldTime = (clueHoldTime - (progress * 10)); //low reduction in case user strikes at higher levels
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(pattern[guessCounter] === btn){
    if(guessCounter === progress){
      if (progress === pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
    
  else{ // strike logic
    if(strikes > 0){
      switch(strikes){
        case 2:
          alert("Wrong sequence, 2 more tries");
          strikes -= 1;
          break;
        case 1:
          alert("Wrong sequence, 1 more try");
          strikes -= 1;
          break;
      }
      playClueSequence();
      
    }
    else{
    loseGame();
    }
  }

}
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)