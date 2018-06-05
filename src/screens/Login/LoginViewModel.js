/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Video from 'react-native-video';
import {
    authenticate,
    load
} from '../../actions/authentication.action';
import {styles} from './styles.js'
import type {State} from './../../reducers';
import type {AuthState} from './../../reducers/authentication.reducer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi, Sae } from 'react-native-textinput-effects';
import LottieView from 'lottie-react-native';
import LoadingButton from '../../components/LoadingButton/LoadingButton';


interface Props {
    authenticate() : void,
    load(load : bool) : void,
    loading : bool,
    authenticated: bool
}

class LoginViewModel extends Component<Props, State> {

    username : string = ""
    password : string = ""

    shouldComponentUpdate(nextProps : Props){
        if(nextProps.authenticated != this.props.authenticated
            || nextProps.loading != this.props.loading)
        {
            return true;
        }
        else {
            return false
        }
    }

    componentDidMount(){
    }

    authenticateUser = async () => {
        let usersInfos = await this.props.authenticate();
        debugger;
        let loadingButton : LoadingButton = this.refs.loadingButton;
        loadingButton.loadFinishedWithStatus("SUCCESS");
    }

    render() {
        console.log("Render");
        return (
            <View style={styles.container}>
                    <Video
                      repeat
                      resizeMode='cover'
                      source={require('../../assets/videos/bg_home.mp4')}
                      style={styles.background_position}
                    />
                    <View
                        style={[
                            styles.background_position,
                            { backgroundColor : "rgba(255,255,255,0.8)"}
                        ]}
                    />
                    <Fumi
                        label={'Login'}
                        labelStyle={{ color: '#a3a3a3' }}
                        inputStyle={{ color: '#f95a25' }}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        onChangeText={(text : string) => {
                            this.username = text;
                        }}
                        iconColor={'#f95a25'}
                        iconSize={20}
                        style={{ width: '80%', height: 70}}
                    />
                    <Fumi
                        iconSize={20}
                        style={{ width: '80%', height: 70, marginTop: 2}}
                        label={'Password'}
                        iconClass={FontAwesomeIcon}
                        iconName={'lock'}
                        onChangeText={(text : string) => {
                            this.password = text;
                        }}
                        iconColor={'#77116a'}
                    />
                <Text>{this.props.loading ? "Loading" : "Not loading" }</Text>
                <LoadingButton
                    ref="loadingButton"
                    onPress={() => {
                        this.authenticateUser();
                    }}
                />
            </View>
        );
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
        authenticate: state.authReducers.authenticate,
        loading: state.authReducers.loading
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginViewModel);
