# bruke Arduino som ekstern IO
Arduino er en mikrokontroller, det vil si at den i prinsippet fungerer som en forenklet versjon av en PLS.

## bakgrunn
her har vi, istedenfor å skrive et program som kjører på mikrokontrolleren, så er det blitt installert [Firmata](https://www.arduino.cc/reference/en/libraries/firmata/) på den i forkant. Firmata er en programmvare som lar oss styre mikrokontrolleren fra et Nodejs program som kjører på en data som er koblet til mikrokontrolleren via en serielport (USB).

## det vi skal jobbe med
i Nodejs programmet vårt så bruker vi modulen (libraryen) [firmata.js](https://www.npmjs.com/package/firmata) for å snakke med Firmata programmvaren som er installert. firmata.js er ikke samme program som Firmata, men de er laget for å fungere ilag.


## diverse ekstra

- [SerialPort](https://www.npmjs.com/package/serialport?activeTab=readme)