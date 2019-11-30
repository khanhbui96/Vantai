import callApi from '../utils/callApi';
import {
        GET_VEHICLES,
        ADD_VEHICLES,
        DELETE_VEHICLE,
        SELECT_VEHICLE,
        UPDATE_VEHICLE,
        GET_ERRS
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions'

export const getAll = () => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        const vehicles = await callApi('get', '/vehicles/getAll', null);
        await dispatch({
            type: GET_VEHICLES,
            payload: vehicles.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addVehicle = (data, func) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        const vehicle = await callApi('post', '/vehicles/create', data);
        await dispatch({
            type: ADD_VEHICLES,
            payload: vehicle.data
        })
        func()
    }catch(err){
        await dispatch(getErrs(err.response.data))
    }  
};
export const deleteVehicle = (id) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/vehicles/delete/${id}`, null );
        await dispatch({
            type: DELETE_VEHICLE,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateVehicle = (id, data, func) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/vehicles/update/${id}`, data );
        await dispatch({
            type: UPDATE_VEHICLE,
            payload: {
                id,
                data
            }
        });
        func();
    }catch(err){
        console.log(err)
    }
};
export const selectVehicle = (vehicle) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_VEHICLE,
            payload: {
                ...vehicle
            }
        })
    }catch(err){
        console.log(err)
    }
};