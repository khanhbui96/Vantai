import {GET_VEHICLES, ADD_VEHICLES, DELETE_VEHICLE, UPDATE_VEHICLE} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const vehicles = (state=initialState, action)=>{
    switch(action.type){
        case GET_VEHICLES:
            return {
                ...state,
                data: [
                    ...action.payload
                ]
            }
        case ADD_VEHICLES:
            return {
                isUpdate: true,
                data: [
                    ...state.data,
                    action.payload
                ]
            };
        case DELETE_VEHICLE:
            return {
                isUpdate: true,
                data: [
                    ...state.data.filter(vehicle=>{
                        return vehicle._id != action.payload
                    })
                ]
            }
        case UPDATE_VEHICLE:
             return {
                 isUpdate: true,
                 data: [
                     ...state.data.map(vehicle=>{
                         if(vehicle._id == action.payload.id){
                             return action.payload.data
                         }else{
                             return vehicle
                         }
                     }
                    )
                 ]
             }   
        default:
            return {
                isUpdate: false,
                data: [
                    ...state.data
                ]
            }
    }
};

export default vehicles