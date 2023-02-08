var gpio = require("onoff").gpio;
var LED = new gpio(4, "out");
var blinkinterval = setInterval(blinkLED, 250);

function blinkLED() {
    if (LED.readSync() === 0) {
        LED.writeSync(1);
    } else {
        LED.writeSync(0);
    } 
}

function endBlink() {
    clearInterval(blinkinterval);
    LED.writeSync(0);
    LED.unexport();
}

setTimeout(endBlink, 5000);