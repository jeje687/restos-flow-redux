//@flow
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from "prop-types";
import {styles} from './../styles/styles.js';
import Video from 'react-native-video';
import { Fumi, Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LoadingButton from '@components/LoadingButton/LoadingButton';

interface Props {
    onPasswordChanged: (text: string) => void;
    onUsernameChanged: (text: string) => void;
    registerButtonRef: (button : ?LoadingButton) => void;
    authenticateUser: () => void;
    loading: boolean;
}

export const Login = ( props : Props ) => {
    var {
        onPasswordChanged,
        onUsernameChanged,
        registerButtonRef,
        authenticateUser,
        loading
    } = props;
    return (
        <View style={styles.container}>
                <Video
                  repeat
                  resizeMode='cover'
                  source={require('../../../assets/videos/bg_home.mp4')}
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
                    onChangeText={onUsernameChanged}
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
                    onChangeText={onPasswordChanged}
                    iconColor={'#77116a'}
                />
            <LoadingButton
                ref={registerButtonRef}
                onPress={authenticateUser}
            />
        </View>
    );
}

/*Login.propTypes = {
    onPasswordChanged: PropTypes.func.isRequired,
    onUsernameChanged: PropTypes.func.isRequired,
    registerButtonRef: PropTypes.func.isRequired,
    authenticateUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};*/
