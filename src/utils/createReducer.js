// @flow
import type {Action} from './../actions';

type Reducer<S, A: Action> = (S, A) => S;

export default function createReducer<S, A:*>(initialState : S, handlers: { [key: string]: Reducer<S, A> }) : Reducer<S, A> {

    return function reducer(state: S = initialState, action: A): S {

        if(handlers.hasOwnProperty(action.type)){
            let handler = handlers[action.type];
            return handler(state, action);
        }
        else {
            return state;
        }

    }

}
