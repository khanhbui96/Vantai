import {GET_ERRS} from '../constants/actions';

const initialState = {};

const errs = (state = initialState, action)=>{
    switch(action.type){
        case GET_ERRS:
            console.log('have errs');
            return {...action.payload}
        default:
            return state
    }
};
export default errs