import callApi from '../utils/callApi';
import {
        GET_MOTOBIKES,
        ADD_MOTOBIKE,
        DELETE_MOTOBIKE,
        SELECT_MOTOBIKE,
        UPDATE_MOTOBIKE
    } from '../constants/actions';
import setAuthHeader from '../utils/setAuthHeader';
import {getErrs} from './erros.actions'

export const getAll = () => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        const motoBike = await callApi('get', '/motoBikes/getAll', null);
        await dispatch({
            type: GET_MOTOBIKES,
            payload: motoBike.data
        })
    }catch(err){
        console.log(err)
    }
   
};
export const addMotoBike = (data, func) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        const motoBike = await callApi('post', '/motoBikes/create', data);
        await dispatch({
            type: ADD_MOTOBIKE,
            payload: motoBike.data
        });
        func()

    }catch(err){
        dispatch(getErrs(err.response.data))
    }  
};
export const deleteMotoBike = (id) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/motoBikes/delete/${id}`, null );
        await dispatch({
            type: DELETE_MOTOBIKE,
            payload: id
        })
    }catch(err){
        console.log(err)
    }
};
export const updateMotoBike = (id, data) => async dispatch => {
    try{
        await setAuthHeader(localStorage.getItem('jwt'));
        callApi("post", `/motoBikes/update/${id}`, data );
        await dispatch({
            type: UPDATE_MOTOBIKE,
            payload: {
                id,
                data
            }
        })
    }catch(err){
        console.log(err)
    }
};
export const selectMotoBike = (MotoBike) => async dispatch => {
    try{
        await dispatch({
            type: SELECT_MOTOBIKE,
            payload: {
                ...MotoBike
            }
        })
    }catch(err){
        console.log(err)
    }
};