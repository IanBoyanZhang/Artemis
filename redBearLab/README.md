# 
BLE_API.h

BLE_API from mbed

forked from 

[ARMmbed ble](https://github.com/ARMmbed/ble)

Search UART/Serial Port Emulation over BLE
[Nordic info center](http://infocenter.nordicsemi.com/index.jsp?topic=%2Fcom.nordic.infocenter.sdk5.v11.0.0%2Findex.html)


## Using nRF5x SDK and example with BLE_nano

Question: Is it necessary to use "custom\_board.h" with 1.5 version firmware?

[nRF51 SDK v7 using the SDK with other boards](http://developer.nordicsemi.com/nRF51_SDK/nRF51_SDK_v7.x.x/doc/7.0.1/s110/html/a00018.html)

[BLE Nano and the nRF51822 SDK](https://gist.github.com/george-hawkins/f77054c71a046c5b5f83)

[BLE nano Firmware Development with nRF51822 SDK and GCC](http://redbearlab.com/nrf51822-sdk/)

[Development with GCC and Eclipse](https://devzone.nordicsemi.com/tutorials/7/)

[Nordic Semi nRF51822 download central](https://www.nordicsemi.com/eng/Products/Bluetooth-Smart-Bluetooth-low-energy/nRF51822)

[Nordic Semi nRF51822 developer SDK zone](http://developer.nordicsemi.com/)

### Remap memory 

BLE nano with s110

[BLE nano Eclipse BLE Nano](http://blog.blecentral.com/2015/06/05/eclipse_ble_nano/)

BLE nano with s130
[nRF51822 iRAM and iROM settings for v05 s130 sd](https://devzone.nordicsemi.com/question/15994/nrf51822-iram-and-irom-settings-for-v05-s130-sd/)
Requiremnts:

Hardware: 
  
  BLE nano with MK20 USB board

Software:

  Nordic nRF51822 SDK (v6.1 or above)

  SoftDevice S110 (v7 or above)

    You can try S120 or S130 if you want to development BLE central role firmware

    [S130 softdevice download center](https://www.nordicsemi.com/eng/nordic/Products/nRF51822/S130-SD/46579)
Utility:

  merge tool -> srec\_cat

  GNU Make

  GNU ARM GCC

Phone App:

  BLE Central device with Nordic nRF ToolBox App installed e.g. an iPhone 4s or later


## Command line merge

Note: to compile example within Nordic SDK

Put custom_board.h file into example/bsp folder where example boards.h searching board specific support package

srec_cat $SOFTDEVICE -intel $INPUT -intel -o $OUTPUT -intel --line-length=44


## Online debugger

[How to use MK20 with openocd for debugging](https://developer.mbed.org/questions/4934/How-to-use-MK20-with-openocd-for-debuggi/)


## Official DK

### nRFStudio

[Getting started with nRF Studio Go on OSX and Linux](https://github.com/tigoe/BLEDocs/wiki/Getting-Started-with-nRF-Studio-Go-on-OSX-and-Linux)

[What is PCA10028](https://devzone.nordicsemi.com/question/75039/pca10028-what-is-it/)
<img src="https://github.com/IanBoyanZhang/Artemis/blob/master/redBearLab/images/pca10028.jpeg?raw=true" width="150" data-rotate="-90">
