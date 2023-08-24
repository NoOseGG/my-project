// asyncActions.js
import {fetchDataRequest, fetchDataSuccess, fetchDataFailure, fetchAuthSuccess} from '../../Actions';
import axios from 'axios'; // Импортируйте библиотеку для работы с запросами

export const fetchAuth = (user) => {
    return async (dispatch) => {

        try {
            console.log(`before response ${JSON.stringify(user)}`)
            const response = await axios.post(`http://93.125.0.140:1338/api/v1/auth/login/`, user)
            console.log(`response ${JSON.stringify(response.data.user)}`)
            console.log(`token-- ${response.data.token}`)
            const data = response.data
            dispatch(fetchAuthSuccess(data))
        } catch (e) {
            console.log("ERROR")
            console.log(e)
        }

    };
};
