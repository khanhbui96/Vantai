import callApi from '../utils/callApi';
import {
        GET_DRIVERS,
        ADD_DRIVER,
        DELETE_DRIVER,
        SELECT_DRIVER,
        UPDATE_DRIVER
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';

export const getAll = () => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        const drivers = await callApi('get', '/drivers/getAll', null);
        await dispatch({
            type: GET_DRIVERS,
            payload: drivers.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addDriver = (data) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi('post', '/drivers/create', data);
        await dispatch({
            type: ADD_DRIVER,
            payload: data
        })

    }catch(err){
        alert(err.response.data)
    }  
};
export const deleteDriver = (id) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/drivers/delete/${id}`, null );
        await dispatch({
            type: DELETE_DRIVER,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateDriver = (id, data) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/drivers/update/${id}`, data );
        await dispatch({
            type: UPDATE_DRIVER,
            payload: {
                id,
                data
            }
        })
    }catch(err){
        console.log(err)
    }
};
export const selectDriver = (driver) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_DRIVER,
            payload: {
                ...driver
            }
        })
    }catch(err){
        console.log(err)
    }
};