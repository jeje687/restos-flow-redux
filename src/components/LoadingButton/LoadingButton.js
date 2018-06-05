/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Easing,
    Dimensions
} from 'react-native';
import {styles} from './styles';
import Spinner from 'react-native-spinkit';
interface State {
    loading: boolean,
    width: Animated.Value
}

interface Props {
    onPress : () => void
}

export type LoadStatus = "SUCCESS" | "ERROR" | "WARNING";

export default class LoadingButton extends Component<Props, State> {

    screenWidth : number = Dimensions.get('window').width;

    constructor(){
        super();
        this.state = {
            loading: false,
            width: new Animated.Value(this.screenWidth*0.8)
        };
    }

    /**
     * Start the loader
     * @type {void}
     */
    startLoading = () : void => {
        this.setState({
            loading: true
        },
        () : void => {
            let easing = Easing.elastic(1.2);
            Animated.timing(
                this.state.width,
                {
                    toValue: 100,
                    duration: 1000,
                    easing
                }
            ).start();
        });
    }

    /**
     * Called when load is finished
     * @type {LoadStatus}
     */
    loadFinishedWithStatus = ( status : LoadStatus ) : void => {
        this.setState({
            loading: false
        },
        () : void => {
            let easing = Easing.elastic(1.2);
            Animated.timing(
                this.state.width,
                {
                    toValue: this.screenWidth*0.8,
                    duration: 1000,
                    easing
                }
            ).start();
        });
    };

    render() {
        return (
            <Animated.View
                style={[styles.container, {width: this.state.width}]}
                >
                <TouchableOpacity
                    ref="loadingButton"
                    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => {
                        this.props.onPress();
                        this.startLoading();
                    }}>

                    <Spinner
                        isVisible={this.state.loading}
                        size={60}
                        type={"ThreeBounce"}
                        color="white"/>

                    { !this.state.loading &&
                        <Text>I'm the LoadingButton component</Text>
                    }

                </TouchableOpacity>
            </Animated.View>
        );
    }
}
