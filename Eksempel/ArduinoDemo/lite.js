const firmata = require("firmata");
const { SerialPort } = require("serialport");

const com = "COM3";
//const com = "COM4";

let board = new firmata.Board(com, myFunc);

function myFunc(params) {
  console.log("Connected");
  board.pinMode(13, board.MODES.OUTPUT);
  setInterval(function(){
    board.digitalWrite(13, (board.pins[13].value) ? 0 : 1);
  }, 1000);
}