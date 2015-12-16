# Artemis

## Servo

[Sparkfun SM-S430R servo motor](https://www.sparkfun.com/products/9347)

Voltage:

(Battery Pack?)
4.8V to 6V

Calibrate servo with built-in potentiometer with method shown in Ref[2]

## Touch button
[AT42QT1010 Breakout](https://www.sparkfun.com/products/12041)

## BBB Power output
SYS\_5V Maximum Current 250mA!

## BBB PRU programming

[Using the C language to program the am335x PRU](http://www.embeddedrelated.com/showarticle/603.php)

[Using the Beaglebone PRU to achieve realtime at low cost](http://www.embeddedrelated.com/showarticle/586.php)

[Third party PRU tool](https://github.com/texane/pru_sdk/tree/master/example/pruss_c)

## Particle Photon

CLI installation on MAC

[Tutorial particle CLI on Mac OSX](https://community.particle.io/t/tutorial-particle-cli-on-mac-osx-26-sep-2015/5225)

### GCC-ARM-Embedded toolchain

[Tool chain installation guide](https://launchpadlibrarian.net/209775724/readme.txt)

```bash
npm install -g particle-cli
```
### Different Modes on Particle Photon

[Particle IO official doc: Modes](https://docs.particle.io/guide/getting-started/modes/photon/)

[Particle Photon NodeJS Setup](http://blog.jongallant.com/2015/08/particle-photon-setup-nodejs.html)

### Get Photon ID

Under listening mode

```bash
particle identify 
```
```
or
```bash
particle serial identify
```

#### Communication Core

Communication core source code location

./firmware/communication

### Serial Communication

In terminal:

Ex: 
```bash
screen /dev/tty.usbmodem1421

```

## Light Blue Bean (Bean)

### Getting started OSX

[Getting Started OSX](http://legacy.punchthrough.com/bean/getting-started-osx/)

### Virtual Serial Port under OS X

TODO: research Bean library/Serial-BLE Bridge

```bash
/tmp/tty.LightBlue-Bean
```

[Setting virtual serial](http://legacy.punchthrough.com/bean/arduino-users-guide/#setting-virtual-serial)

References:

# BBB

1. [Different Servo Vendor pin definition](http://www.fatlion.com/sailplanes/servos.html)

2. [Continuous Servo Calibration](https://www.youtube.com/watch?v=Zd6Es_Br7ys)

3. [BeagleBone Black Cape Expansion Headers](http://beagleboard.org/static/images/cape-headers.png)

4. [BeagleBone Black Pinout table](http://robotic-controls.com/node/68)

5. [BeagleBone Black PRU](http://beagleboard.org/pru)

6. [IOT Prototyping with Particle Photon](http://www.tamberg.org/chopen/2015/IoTPrototyping.pdf)

# Particle/ARM

1. [Particle Docs: The Build System](https://github.com/spark/firmware/blob/latest/docs/build.md)

2. [Sparkfun photon development guide:ARM GCC and DFU bootloader offline](https://learn.sparkfun.com/tutorials/photon-development-guide/arm-gcc-and-the-dfu-bootloader-offline)

3. [How to use serial print with Particle](https://community.particle.io/t/how-to-use-serial-print/4456)

# Bean/ATmega328p

1. [Bean Serial Loop Back](https://github.com/evothings/evothings-examples/blob/master/experiments/lightblue-bean-serial/SerialLoopback/SerialLoopback.ino)

2. [Bean Bluetooth documentation](https://github.com/PunchThrough/bean-documentation)

3. [Bean dev reference](https://punchthrough.com/files/bean/sdk-docs/index.html)
