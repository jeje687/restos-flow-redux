// @flow

import createReducer from '../utils/createReducer'
import type {AuthenticateAction, LoadAction} from '../actions/authentication.action';
import type {Action} from '../actions';

export type AuthState = {
    authenticate : boolean,
    loading: boolean
}

let initialState : AuthState = {
    authenticate : false,
    loading : false
}

let authenticateReducer =  (state : AuthState, action : AuthenticateAction ) : AuthState => {
    let newState : AuthState = Object.assign({}, state, {
        user: action.user,
        credentials: action.credentials,
        authenticate : action.authenticated,
        loading : false
    });
    debugger;
    return newState || state;
}

let loadingReducer = (state: AuthState, action: LoadAction) : AuthState => {
    let newState : AuthState = Object.assign({}, state,{
        loading : action.loading,
        authenticate : state.authenticate
    });
    return newState || state;
}

let authReducers = (state: AuthState, action: Action): AuthState => {

    switch(action.type){
        case 'AUTHENTICATE':
            return authenticateReducer(state, action);
        case 'LOADING':
            return loadingReducer(state, action);
        default:
            return state != null ? state : initialState;
    }
};

export default authReducers;
