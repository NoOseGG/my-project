// asyncActions.js
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../Actions';
import axios from 'axios'; // Импортируйте библиотеку для работы с запросами

export const fetchData = (unp) => {
    return (dispatch) => {
        dispatch(fetchDataRequest());

        axios.get(`http://93.125.0.140:1338/api/v1/profile_search/?val=${unp}`)
            .then(response => {
                dispatch(fetchDataRequest())
                const data = response.data;
                console.log(data)
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};
