// @flow
import * as AuthActions from './authentication.action'
import type {LoadAction, AuthenticateAction} from './authentication.action';

export type Action =
    LoadAction
    | AuthenticateAction

interface IActions {
    authActions : void
}

export const ActionCreators = Object.assign({},
    AuthActions,
);
