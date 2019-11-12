import {GET_DRIVERS, ADD_DRIVER, DELETE_DRIVER, UPDATE_DRIVER} from "../constants/actions";

const initialState = {
    isUpdate: false,
    data: []
};

const drivers = (state=initialState, action)=>{
    switch(action.type){
        case GET_DRIVERS:
            return {
                ...state,
                data: [
                    ...action.payload
                ]
            }
        case ADD_DRIVER:
            return {
                isUpdate: true,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case DELETE_DRIVER:
            return {
                isUpdate: true,
                data: [
                    ...state.data.filter(driver=>{
                        return driver._id != action.payload
                    })
                ]
            }
        case UPDATE_DRIVER:
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

export default drivers