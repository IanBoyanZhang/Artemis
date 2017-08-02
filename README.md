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

#### Particle user-code download

[Wifi DFU reference](https://github.com/spark/docs/wiki/DFU-reference)

### Serial Communication

In terminal:

Search connected USB tty

```bash
ls /dev/tty.usb*
```

Sample output:
```bash
/dev/tty.usbmodem1411
```

Ex: 
```bash
screen /dev/tty.usbmodem1421

```
### Connecting to Photon/Getting started using OSX

[Connect to Photon using OSX](https://docs.particle.io/guide/getting-started/connect/photon/#using-osx)

### Energy Consumption

Particle forum
[Photon energy consumption estimation](https://community.particle.io/t/datasheet-of-photon/10884/4)

[Photon power consumption info](https://community.particle.io/t/photon-power-consumption-info/9019/11)

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

7. [Enabling i2c devices on BBB](http://beaglebone.cameon.net/home/i2c-devices)

# Particle/ARM

1. [Particle Docs: The Build System](https://github.com/spark/firmware/blob/latest/docs/build.md)

2. [Sparkfun photon development guide:ARM GCC and DFU bootloader offline](https://learn.sparkfun.com/tutorials/photon-development-guide/arm-gcc-and-the-dfu-bootloader-offline)

3. [How to use serial print with Particle](https://community.particle.io/t/how-to-use-serial-print/4456)

# Bean/ATmega328p

1. [Bean Serial Loop Back](https://github.com/evothings/evothings-examples/blob/master/experiments/lightblue-bean-serial/SerialLoopback/SerialLoopback.ino)

2. [Bean Bluetooth documentation](https://github.com/PunchThrough/bean-documentation)

3. [Bean dev reference](https://punchthrough.com/files/bean/sdk-docs/index.html)

4. [Bean troubleshooting](http://legacy.punchthrough.com/bean/support/troubleshooting/)

5. [Power supply voltage step down solution](http://www.shoutinginfrench.com/hacking-an-external-power-source-for-a-light-blue-bean/)

6. [Bean iBean Mode](h.ttp://legacy.punchthrough.com/bean/ibeacon/)

7. [Unofficial Bean SDK](https://github.com/PunchThrough/Bean-Android-SDK)

# Android React Native

1. [React Native Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)

2. [Can an Android device act as an iBeacon](http://stackoverflow.com/questions/19602913/can-an-android-device-act-as-an-ibeacon)

# Bluetooth and BLE

1. [How GAP an GATT work](https://www.punchthrough.com/bean/guides/everything-else/how-gap-and-gatt-work/)

# Particle Mobile

1. [Blynk multiple embedded platform Android library](https://github.com/blynkkk/blynk-library)

## Relay

Single Relay Board
[Single Relay Board Guide](http://pub.ucpros.com/download/27115-Single-Relay-Board-Guide-v1.0.pdf)

# RedBearLab

[install and add gcc arm to PATH.sh](https://gist.github.com/joegoggins/7763637)
[Development Guide](http://redbearlab.com/nrf51822-sdk/)

## MBED + nRF51822

# Passive Proximity Detection
Atmel solution

Low Power Consumption:
The average current consumption for a single proximity detection node should be less than 100uA to avoid excessive drain on the battery when the vehicle is not running

Fast Response Time:
The sensor scan rate, the time between sensor reading should be less than 20ms. A fast scan rate means more sensor reading per second, which will result in earlier detection of 
driver's hand as it approaches the door handle sensor.

This will mitigate the delay introduced by communication processing and enable quickly unlock.

Simple, Low-cost interface:

Standard networking interfaces such as CAN or LIN requires excessive protocol/processing overhead and are too power hungry for this low power application. A simple, more streamlined
approach is required, one that utilize a single-wire +12V power line data transfer protocol.

Robust Environmental Performance:

The proximity sensor must be able to withstand the harsh operating environment that the automobile exterior is exposed to. This means that the sensor must resist the effects of 
moisture, temperature and localized electromagnetic disturbance.

(Fast Charge Mode)

# Stores

## RF stores

[Semistore Wireless Promo](http://www.semiconductorstore.com/Pages/Promo_Landing/Semistore_Wireless_06_2010_Promo2.asp)


# Power Storage

[Battery Holder 3D printable](http://www.thingiverse.com/thing:834695)

# Produce certification

Underwriters Labs (UL)

# beacon

[Aislelabs beacon hardware comprehensive report 2015](http://www.aislelabs.com/reports/beacon-guide/)

[All beacons reviews](https://nonokunono.wordpress.com/)

Open-Mesh? CloudTrax?

# Edision 

[Edison WiFi](http://www.intel.com/content/dam/support/us/en/documents/edison/sb/edison_wifi_331438001.pdf)

# Nordic Semi

[Getting Started with nRF Studio Go on OSX and Linux](https://github.com/tigoe/BLEDocs/wiki/Getting-Started-with-nRF-Studio-Go-on-OSX-and-Linux)

## Blinky Example
As in 01/11/2017, test nRF51 DK board (SDK version nRF5_SDK_12.0.0_12f24da.zip);

First test with blank version source code. No softdevice

## Toolchain
[Programming an nRF on mac](https://aaroneiche.com/2016/06/01/programming-an-nrf52-on-a-mac/)
[nrfjprog pynrfjprog](https://devzone.nordicsemi.com/blogs/840/nrfjprog-pynrfjprog-intro-mac-os-x-linux-now-suppo/)

## Test with external antenna
Connection: Section 5.8
[nRF51 DK UG v1.1](http://infocenter.nordicsemi.com/pdf/nRF51_DK_UG_v1.1.pdf)

Code example with RF test example
Direct Test Mode (DTM)
components/ble/ble_dtm

## nRF schematic

### Reset
[How to implement reset button on nRF51822](https://devzone.nordicsemi.com/question/3632/how-to-implement-reset-button-on-nrf51822/)

### General SWD questions
[Programming Internal flash over the serial wire debug interface](https://www.silabs.com/Support%20Documents/TechnicalDocs/AN0062.pdf)

### nRF programming

Breakout

[Can I directly start programming a nRF51822 breakout board](https://devzone.nordicsemi.com/question/1874/can-i-directly-start-programming-a-nrf51822-breakout-board/)

[nRF 51 dk external programming](http://electronut.in/nrf51-dk-external-programming/)

With debugger

[Creating a Bluetooth LE Mouse using Nordic nRF51 and Visual Studio](https://visualgdb.com/tutorials/arm/nrf51/mouse/)

[Setting up segger on a MAC or PC and Debug step by Step for humans](https://devzone.nordicsemi.com/blogs/1104/setting-up-segger-on-a-mac-or-pc-and-debug-step-by/)
