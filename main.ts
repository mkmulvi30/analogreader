let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogReadWritePin.P1)
    basic.showNumber(value)
})
