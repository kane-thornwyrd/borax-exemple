module.exports = (state = {}, action) => {
  switch(action.type){
    case 'LIGHT_ON':
      return {shine: action.value};
    case 'LIGHT_OFF':
      return {shine:action.value};
    default:
      return state;
    };
};
