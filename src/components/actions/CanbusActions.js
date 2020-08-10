const { ADD_TO_CART } = require("./action-types/Can-busactions");

import {ADD_TO_CART} from './action-types/Can-busactions'


export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}