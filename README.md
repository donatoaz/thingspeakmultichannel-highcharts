thingspeakmultichannel-highcharts
=================================

Multichannel display from Thingspeak.com using Highcharts.com. 
 by turgo initially released at 
 http://forum.arduino.cc/index.php?topic=213058.msg1560990#msg1560990
 
Displays multiple channels of data and fields, using Highstock.js 
 (free for non-commercial use, under Creative Commons Attribution-NonCommercial 
 3.0 License), from one or more thingspeak.com channels.

## Purpose

This was initially used to log temperatures of a home brewing beer fermenter

The electronics part of the project will be added soon

## Usage

Add your channel / stream information to channelKeys arrays, syntax below:

```javascript
channelKeys.push({channelNumber:_YOUR__CHANNEL__NUMBER_, name:'_YOUR__CHANNEL__NAME_',key:'_YOUR__CHANNEL__KEY_',
                  fieldList:[{field:1,axis:'T'},{field:2,axis:'T'}]});
```

axis can be either *'T'* or *'O'*, where T is a temperature axis and O is of type "_other_".

## Notes

Channel must, evidently, be public.

## To do

- [x] Separate chart options from main file, to unclutter.
- [ ] Enable dynamically adding channels and streams
- [ ] Enable dynamically setting the "unit" of the *T* axis (currently it is oC -- centigrades)
- [ ] Add electronics part of the project
- [ ] Make more beer

## See also

[Highstock](http://code.highcharts.com/)
[Thingspeak](https://thingspeak.com/)