export default function(state = null, action){

  switch (action.type) {
    case 'CHANNELS':
      return action.payload;
    default:
    return state;
  }

}
