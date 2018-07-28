/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
    authenticate,
    load
} from '@actions/authentication.action';
import type {State} from '@reducers';
import type {AuthState} from '@reducers/authentication.reducer';
import LottieView from 'lottie-react-native';
import {Login} from "./../views/Login";
import LoadingButton from '@components/LoadingButton/LoadingButton';


interface Props {
    authenticate() : void,
    load(load : bool) : void,
    loading : bool,
    authenticated: bool
}

class LoginContainer extends Component<Props, State> {

    username : string = ""
    password : string = ""
    loadingButton : ?LoadingButton = null;

    componentDidMount(){
        this.props.load(true);
    }

    onAuthPress = () => {
        this.authenticateUser();
    }

    authenticateUser = async () : Promise<void> => {
        let usersInfos = await this.props.authenticate();
        //this.props.load(false);;
        if(this.loadingButton){
            this.loadingButton.loadFinishedWithStatus("SUCCESS");
        }
    }

    onPasswordChanged = (text: string) => {
        this.username = text;
    }

    onUsernameChanged = (text : string) => {
        this.password = text;
    }

    registerButtonRef = (button : ?LoadingButton) => {
        this.loadingButton = button;
    }

    render() {
        return <Login
            {...this.props}
            onPasswordChanged={this.onPasswordChanged}
            onUsernameChanged={this.onUsernameChanged}
            registerButtonRef={this.registerButtonRef}
            authenticateUser={this.onAuthPress}
        />
    }
}

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
      authenticate,
      load
    },
    dispatch
);

function mapStateToProps(state: State) {
    return {
        authenticate: state.auth.authenticate,
        loading: state.auth.loading
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
