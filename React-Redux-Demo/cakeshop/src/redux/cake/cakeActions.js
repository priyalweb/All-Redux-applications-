import { BUY_CAKE } from './cakeTypes';

export const buyCake = (number = 1) => { 
    return{
        type: BUY_CAKE,
        //what payload does is to send additional info to the reducer 
        payload: number,
    }
}