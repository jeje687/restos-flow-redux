// @flow

import type {
    GetState,
    Dispatch
} from './../../App'
import AuthenticationServices from '@model/services/authenticate';
import type {User} from '@model/Entity/User';
import type {Credentials} from '@model/Entity/Credentials';
import {batchActions} from 'redux-batched-actions';

import type {Action} from './index';
export type AuthenticateAction = {
    type: 'AUTHENTICATE',
    authenticated: boolean,
    user: User,
    credentials: Credentials
}

export type LoadAction = {
    type: 'LOADING',
    loading : boolean
}

export function authenticate() {
    return async (dispatch: Dispatch, getState : GetState) => {
        try {
            let {credentials, user} = await AuthenticationServices.authenticate();
            dispatch(
                batchActions([
                    setAuthenticated(true, credentials, user),
                    setLoading(false)
                ], 'LOGIN_SUCCESS')
            );
            return {credentials : credentials, user : user};
        }
        catch(error){
            return error;
        }
    }
}

function setAuthenticated(authenticated : boolean, credentials: Credentials, user: User) : Action {
    return {
        type : 'AUTHENTICATE',
        authenticated,
        user,
        credentials
    }
}

export function load(load : boolean) {
    return (dispatch: Dispatch, getState : GetState) => {
        dispatch(setLoading(load));
    }
}

function setLoading(loading : boolean) : Action {
    return {
        type : 'LOADING',
        loading
    }
}
