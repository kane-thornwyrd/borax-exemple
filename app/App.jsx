let { Datastore } = require('borax');

Datastore.registerReducer('timer', require('./reducers/timer'));
Datastore.registerReducer('light', require('./reducers/light'));

Datastore.dispatch(require('./actions/light/turnOff')());
console.log( Datastore.getState().get('light').get('shine') );
Datastore.dispatch(require('./actions/light/turnOn')());
console.log( Datastore.getState().get('light').get('shine') );
