/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program replicates a traffic light
*/

// variables
let myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Turn off all NeoPixels 
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
myStrip.show()

// Button A Pressed 
input.onButtonPressed(Button.A, function () {
    // Green light
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Green))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.show()
    basic.pause(2000)

    // yellow light
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.show()
    basic.pause(2000)

    // red light
    myStrip.showColor(neopixel.colors(NeoPixelColors.Red))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.show()
    basic.pause(2000)

    // Turn off all NeoPixels 
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.showColor(neopixel.colors(NeoPixelColors.Black))
    myStrip.show()
})
