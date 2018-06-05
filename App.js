/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
    Store as ReduxStore,
    Dispatch as ReduxDispatch,
} from 'redux';
import type {Action} from './src/actions';
import type {State} from './src/reducers';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import RootNavigation from './src/navigation/root';
import reducer from './src/reducers';

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
export type Dispatch =
  & ReduxDispatch<Action>
  & Thunk<Action>
export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore() : Store {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, enhancer);
}

const store : Store = configureStore();

type Props = {

};

export default class App extends Component<Props> {

    constructor(){
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <RootNavigation/>
            </Provider>
        );
    }
}
