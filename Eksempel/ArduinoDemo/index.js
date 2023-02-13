
const { SerialPort } = require("serialport");
const firmata = require('firmata');
const prompt = require('prompt-sync')();



//siden jeg ikke gidder å huske hvilken usb port
//arduinoen er koblet til så har jeg en del dedikert til å finne en.
console.log("Searching for connected")

const attempts = 10;

let board; // reserverer variabelen utenfor for loopen sin scope

const port = SerialPort.list().then((ports) => {
  
  if (ports.length > 0) {    

    console.log("found the port(s):")
    
    for (let j = 0; j < ports.length; j++) {
      console.log(j + " : " + ports[j].path);
    }
    
    const n = parseInt( prompt("type the number corresponding to the port you want to use: "));
    const com = ports[n];
    
    board = new firmata.Board(com.path, run);
    connecting =false;
  }
  
  else {
    setTimeout(console.error("No serial ports found."),2000);
  }  
});




function run(params) {
  console.log("Connected");
  board.pinMode(13, board.MODES.OUTPUT);
  setInterval(function(){
  board.digitalWrite(13, (board.pins[13].value) ? 0 : 1);
  }, 1000);
}