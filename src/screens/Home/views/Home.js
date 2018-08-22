//@flow
import React from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import Row from "../components/Row";
import { styles } from "./../styles/styles.js";
import { Icon } from "react-native-elements";
import type { Place } from "@model/Entity/Place";

interface Props {
    places: ?{ [key: string]: Place };
}

var keyExtractor = (item, index) => item;

var renderItem = ({ item }) => {
    return(
    <Row
        id={item}
    />)
};

export const Home = (props: Props) => {
    var {places} = props;
    return (
        <View style={{ flex: 1 }}>
            {places && <FlatList
                data={Object.keys(places)}
                extraData={props}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />}
            <Icon
                raised
                name="heartbeat"
                type="font-awesome"
                color="#f50"
                style={{ position: "absolute", bottom: 50, left: 50 }}
                onPress={() => console.log("hello")}
            />
        </View>
    );
};
