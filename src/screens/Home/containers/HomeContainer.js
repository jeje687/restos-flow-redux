/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { setPlaces } from "@actions/place.action";
import { bindActionCreators } from "redux";
import { Home } from "./../views/Home";
import type {State as GlobalState} from "@reducers";
import type {Location} from "@model/Entity/Location";

interface Props {
    setPlaces: (
        location: Location,
        radius: number,
        language: string,
        pageToken: ?string
    ) => Promise<void>;
}
interface State {}
class HomeContainer extends Component<Props, State> {
    componentWillMount() {
        this.props.setPlaces(
            { lat: 44.8535869, lng: 4.9223852 },
            100000,
            "fr",
            null
        );
    }

    render() {
        return <Home {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch: *) =>
    bindActionCreators(
        {
            setPlaces
        },
        dispatch
    );

function mapStateToProps(state: GlobalState) {
    return {
        places: state.places.places
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
