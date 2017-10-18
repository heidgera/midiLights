exports.config = {
  piFig: {
    wifiHotspot: {
      ssid: 'MidiLights',
      password: 'midilights!',
      domainName: 'midilights.net',
    },
    autostart: true,
    gitWatch: '/home/pi/midiLights',
    /*softShutdown: {
      pin: 25,
      delayTime: 1000,
    },
    wifi: {
      ssid: 'SensorServer',
      password: 'defaultPass',
    },*/
  },
};
