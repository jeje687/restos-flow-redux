/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose,
    Store as ReduxStore,
    Dispatch as ReduxDispatch,
} from 'redux';
import reduxMulti from 'redux-multi';
import type {Action} from './src/actions';
import type {State} from './src/reducers';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import MainLayout from './src/navigation/mainLayout';
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
      reduxMulti
    ),
  );
  return createStore(enableBatching(reducer), enhancer);
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
                <MainLayout/>
            </Provider>
        );
    }
}
