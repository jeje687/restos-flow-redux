// @flow
import * as AuthActions from './authentication.action'
import type {LoadAction, AuthenticateAction} from './authentication.action';
import type {
    SetPlaceAction,
    SetPlacesAction,
    SetNextPageTokenAction
} from "./place.action";
export type Action =
    LoadAction
    | AuthenticateAction
    | SetPlaceAction
    | SetPlacesAction
    | SetNextPageTokenAction;

export const ActionCreators = Object.assign({},
    AuthActions,
);
