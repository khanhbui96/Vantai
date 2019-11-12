import {SELECT_VEHICLE} from "../constants/actions";

const initialState = {
    isSelected: false,
    driver:{
            level: "",
            name: "",
            birthday: "",
            start: "",
            number: "",
            end: "",
            rank: "",
            position: "",
            registArea:"",
            unit: "",
            degree: "",
            uses:"",
            dateReceive:""
        }
};

const selectVehicle = (state=initialState, action)=>{
    switch(action.type){
        case SELECT_VEHICLE:
            return {
                isSelected: action.payload._id ? true : false,
                vehicle: {
                    ...action.payload
                    }
            }
        
        default:
            return state
    }
};

export default selectVehicle