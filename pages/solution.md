---
layout: page
title: Our Design
description: OralVision's hardware, system architecture, and AI pipeline
image: assets/images/specifics.png
show-tile: true
tile_order: 2
menu_order: 2
hide_image: true
nav-menu: true
---
<div style="display: flex; justify-content: center;">
  <img src="{{ site.baseurl }}/assets/images/specifics.png" alt="OralVision System Architecture" style="max-width:75%; height:auto;" />
</div>

<!-- ## Overview

OralVision is a potential intraoral diagnostic system made up of two main components: an imaging device and an image processing unit. -->
## Imaging Device: Control and Sensing

The control center for OralVision's imaging device would be a XIAO-ESP32-C6 microcontroller, a cheap, yet powerful solution to reduce production costs while maintaining the technical capabilities of larger, more expensive controllers. The image would be taken using an OV5642 5MP image sensor with SPI compatibility for high-bandwidth data transfer to the microcontroller.

In addition, an anti-fog nano coating would be applied to the camera lens to prevent moisture in the mouth from harming the internal components. To minimize user error, the entire system would use a single medical-grade momentary push button to control image streaming and capturing.

<!-- ## Power and Enclosure

The power would be regulated using a 5V voltage regulator that accepts multiple power sources, including USB-C (with a port for easy charging access), AA batteries, and solar power (for extremely low-income areas with minimal electrical infrastructure). The device would also ship with rechargeable nickel-metal hydride batteries to prevent thermal runaway during transportation.

The entire imaging system would ultimately be encased in a clinical sterilization wrap to prevent bacteria and microbes from entering the device, with the prototype's housing being held together using a snap-fit mechanism for easy access to the electronics for battery replacements and software updates. These components are visualized by the CAD drawings found in Figures 1 and 2.

| Power source    | Use case                                                                 |
|-----------------|--------------------------------------------------------------------------|
| USB-C           | Easy charging access                                                     |
| AA batteries    | General use                                                              |
| Solar power     | Extremely low-income areas with minimal electrical infrastructure       | -->

## Communication and Processing

For communication protocols between the imaging device and the machine learning interface, we plan to use SPI and Wi-Fi (see Figure 3). We chose SPI over UART and I2C because of its ability to transmit high-resolution intraoral images continuously with minimal latency.

The device transfers images to our ML interface wirelessly via Wi-Fi 5, where our decentralized federated learning model processes the images through computer vision and transmits diagnostic results and Bayesian inferences to the screen on our Raspberry Pi 5 human-machine interface (HMI). When a device processes an image, it systematically alters neural parameters to prevent overfitting and improve the accuracy of our main model, which clients will be able to download from our website periodically for software updates.

<img src="{{ site.baseurl }}/assets/images/architecture.png" alt="OralVision System Architecture" style="max-width:100%; height:auto;" />
