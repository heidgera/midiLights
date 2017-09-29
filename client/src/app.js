'use strict';

console.log('is it going?');

obtain(['µ/commandClient.js'], ({ MuseControl })=> {
  exports.app = {};

  var control = new MuseControl(window.location.hostname);

  console.log('loading');

  exports.app.start = ()=> {
    console.log('started');

    control.connect();

    var lights = [];

    for (var i = 0; i < 88; i++) {
      lights[i] = [0, 0, 0];
    }

    lights[44] = [255, 0, 0];

    document.onkeypress = (e)=> {
      if (e.key == ' ') console.log('Space pressed');
      else if (e.key == 'k') {
        control.send({ setLights: lights });
        console.log('Sent');
      }
    };

  };

  provide(exports);
});
