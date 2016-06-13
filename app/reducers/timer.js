module.exports = (state = {}, action) => {
  switch(action.type){
    case 'TIMER_START':
      return {start: Date.now()};
    case 'TIMER_END':
      return {end: Date.now()};
    default:
      return state;
    };
};
