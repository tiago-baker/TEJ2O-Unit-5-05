/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program replicates a traffic light.
*/

// variables
let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Button A Pressed 
input.onButtonPressed(Button.A, function () {
    
    // Turn all NeoPixels off
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)

    // Green light
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    basic.pause(2000)

    // yellow light
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    basic.pause(2000)

    // red light
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(2000)

    // Turn off all NeoPixels 
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
})
