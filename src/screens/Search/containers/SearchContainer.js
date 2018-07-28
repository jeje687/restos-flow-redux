/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {Search} from "./../views/Search";


interface Props {
}
interface State {}
class SearchContainer extends Component<Props, State> {
    render() {
        return <Search
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
