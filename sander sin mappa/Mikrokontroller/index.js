const prikk = 500;
const strek = 1500;

const firmata = require ("firmata");

let board = new firmata.Board("COM4", kjor);
function kjor() {
    board.pinMode (13, firmata.PIN_MODE.OUTPUT);
    Blink(board,13,prikk);
}

function Blink(board,pin,time) {
    board.digitalWrite(pin,firmata.PIN_STATE.HIGH);
    setTimeout(board.digitalWrite(pin,firmata.PIN_STATE.LOW),time);
}