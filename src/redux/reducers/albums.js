import axios from 'axios';

const UPDATE_CARS_DATA = 'UPDATE_CARS_DATA';
const initialState = {
    albumsData: []
};
const func=(state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CARS_DATA:
            return {...state, albumsData: action.albumsData};
        default:
            return state
    }
};
export default func



export const getAlbumsData = () => {
    return (dispatch)=>{
    axios('https://jsonplaceholder.typicode.com/photos')
        .then(({data}) => {
            return dispatch({type: UPDATE_CARS_DATA,albumsData:data})
        })
    }
};