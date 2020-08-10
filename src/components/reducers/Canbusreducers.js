import {ADD_TO_CART} from '../actions/action-types/Can-busactions'
import {voltage,current} from '../data/data'


const initialState = {
    Islogged:false,
    voltage:voltage,
    current:current,
    Temperature:voltage,
    SocvsTime:voltage
  };
  
  function Canbusreducers(state = initialState, action) {
    return state;
  };
  

export default Canbusreducers
