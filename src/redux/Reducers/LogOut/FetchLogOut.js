// asyncActions.js
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../Actions';
import axios from 'axios'; // Импортируйте библиотеку для работы с запросами

export const fetchLogOut = (user) => {
    return async (dispatch) => {

        try {
            console.log(`before response ${user}`)
            const response = await axios.post(`http://93.125.0.140:1338/api/v1/auth/logout/`)
            console.log(`response ${response.data.error}`)
        } catch (e) {
            console.log("ERROR")
            console.log(e)
        }

    };
};
