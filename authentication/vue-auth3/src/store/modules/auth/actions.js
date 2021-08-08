import Axios from "axios";
import SignupValidations from "../../../services/SignupValidations";
import { LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from "../../storeconstants";



export default {


    async [LOGIN_ACTION](context, payload) {

        let API_KEY = `AIzaSyCNs3V6wxI5s-uJCh9P82l5cAfOdCEyRUE `;

        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };
    
        let response = '';

        try {

            response =  await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
                postData,
                );
        
        } catch(err) {
            context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
                root: true,
            });
            let errorMessage = SignupValidations.getErrorMessageFromCode(
                err.response.data.error.errors[0].message,
            );
            throw errorMessage;

        }


        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,
            })
        }
    },


    async [SIGNUP_ACTION](context, payload) {
        let API_KEY = `AIzaSyCNs3V6wxI5s-uJCh9P82l5cAfOdCEyRUE `;

        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };

        let response = '';

        context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {
           root: true 
        })

        try {

            response =  await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                postData,
                );
        
        } catch(err) {
            context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
                root: true,
            });
            let errorMessage = SignupValidations.getErrorMessageFromCode(
                err.response.data.error.errors[0].message,
            );
            throw errorMessage;

        }

        context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {
            root: true,
        });


        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,
            })
        }
    },
};