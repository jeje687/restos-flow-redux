// @flow
import { combineReducers } from 'redux';
import authReducers from './authentication.reducer';
import placeReducers from './place.reducer';
import type {AuthState} from './authentication.reducer';

const reducers  = {
    auth: authReducers,
    places: placeReducers
};


export type Reducers = typeof reducers;

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export default combineReducers(reducers);
