// @flow
import { combineReducers } from 'redux';
import authReducers from './authentication.reducer'
import type {AuthState} from './authentication.reducer';

const reducers  = {
    authReducers
};


export type Reducers = typeof reducers;

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export default combineReducers(reducers);
