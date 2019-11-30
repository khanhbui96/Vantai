import {
    GET_MOTOBIKES,
    ADD_MOTOBIKE,
    DELETE_MOTOBIKE,
    UPDATE_MOTOBIKE} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const motoBike = (state=initialState, action)=>{
    switch(action.type){
        case GET_MOTOBIKES:
            return {
                ...state,
                data: [
                    ...action.payload
                ]
            }
        case ADD_MOTOBIKE:
            return {
                isUpdate: true,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case DELETE_MOTOBIKE:
            return {
                isUpdate: true,
                data: [
                    ...state.data.filter(vehicle=>{
                        return vehicle._id != action.payload
                    })
                ]
            }
        case UPDATE_MOTOBIKE:
                return {
                    isUpdate: true,
                    data: [
                        ...state.data.map(driver=>{
                            if(driver._id == action.payload.id){
                                return action.payload.data
                            }else{
                                return driver
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

export default motoBike