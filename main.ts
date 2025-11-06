/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program replicates a traffic light
*/

// variables
let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

neopixelStrip.clear()

// Button A Pressed 
input.onButtonPressed(Button.A, function () {
    // Green light
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(2000)

    // yellow light
    neopixelStrip.clear()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    basic.pause(2000)

    // red light
    neopixelStrip.clear()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(2000)

    // Turn off all NeoPixels 
    neopixelStrip.clear()
})
