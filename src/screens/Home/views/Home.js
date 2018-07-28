//@flow
import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Row from "../components/Row";
import { styles } from "./../styles/styles.js";
import { Icon } from "react-native-elements";

interface Props {}

export const Home = (props: Props) => {
    return (
        <View style={{ flex: 1 }}>
            <Row />
            <Icon
                raised
                name="heartbeat"
                type="font-awesome"
                color="#f50"
                style={{position: "absolute", bottom: 50, left: 50}}
                onPress={() => console.log("hello")}
            />
        </View>
    );
};

Home.propTypes = {};
