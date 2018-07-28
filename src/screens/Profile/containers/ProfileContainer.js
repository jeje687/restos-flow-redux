/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {Profile} from "./../views/Profile";


interface Props {
}
interface State {}
class ProfileContainer extends Component<Props, State> {
    render() {
        return <Profile
            {...this.props}
        />
    }
}

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators({
    },
    dispatch
);

function mapStateToProps(state: State) {
    return {
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
