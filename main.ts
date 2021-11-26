function Cycle_pieton () {
    debut_cycle_pieton = 1
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
input.onButtonPressed(Button.A, function () {
    Pieton = 1
})
function Cycle_lumière () {
    debut_cycle_lumiere = 1
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    debut_cycle_lumiere = 0
    basic.pause(100)
}
let debut_cycle_pieton = 0
let debut_cycle_lumiere = 0
let Pieton = 0
Pieton = 0
debut_cycle_lumiere = 0
debut_cycle_pieton = 0
basic.forever(function () {
    if (Pieton == 1 && debut_cycle_lumiere == 0) {
        Cycle_pieton()
        Pieton = 0
    } else if (Pieton == 0 && debut_cycle_pieton == 0) {
        Cycle_lumière()
    } else {
    	
    }
})
