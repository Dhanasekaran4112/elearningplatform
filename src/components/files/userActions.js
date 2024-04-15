

// import axios from "axios";
// import {
//     USER_LOGIN_REQUEST,
//     USER_LOGIN_SUCCESS,
//     USER_LOGIN_FAIL,
//     USER_SIGNUP_REQUEST,
//     USER_SIGNUP_SUCCESS,
//     USER_SIGNUP_FAIL
// }
//     from '../files/userConstants'



// // for signup connection with backend
// export const signup = (fname, lname, email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_SIGNUP_REQUEST
//         })

//         const config = {
//             headers: {
//                 'Content-type': 'application/json'//setting you content type which you set in postman manullay,here by code
//             }
//         }

//         const { data } = await axios.post('authapi/users/register/',   //url that responsible to register in django
//             {
//                 'fname': fname,
//                 'lname': lname,
//                 'email': email,
//                 'password': password,    //here passing front values to backend

//             },config

//         )
//         dispatch({
//             type: USER_SIGNUP_SUCCESS,
//             payload: data
//         })

//         // localStorage.setItem('userInfo', JSON.stringify(data))
//     }
//     catch (error) {
//         dispatch({
//             type: USER_SIGNUP_FAIL,
//             payload: error.response && error.error.response.data.detail ?
//                 error.response.data.detail : error.message
//         })
//     }
// }


// // for signin connection with backend
// export const login = (email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_LOGIN_REQUEST
//         })

//         const config = {
//             headers: {
//                 'Content-type': 'application/json'//setting you content type which you set in postman manullay,here by code
//             }
//         }

//         const { data } = await axios.post('authapi/users/login/',   //url that responsible to register in django
//             {
//                 'email': email,
//                 'password': password,    //here passing front values to backend

//             },config

//         )
//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: data
//         })

//         localStorage.setItem('userInfo', JSON.stringify(data))

//     }
//     catch (error) {
//         dispatch({
//             type: USER_LOGIN_FAIL,
//             payload: error.response && error.error.response.data.detail ?
//                 error.response.data.detail : error.message
//         })
//     }
// }
