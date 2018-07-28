//@flow
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Rating, Divider } from "react-native-elements";

interface State {}
interface Props {}

export default class Row extends Component<Props, State> {
    render() {
        return (
            <Card title="HELLO WORLD" image={{uri: "https://picsum.photos/200/300"}}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about
                        component structure than actual design.
                    </Text>
                    <Image
                        style={{width:"100%", height: 50}}
                        source={{uri: "https://picsum.photos/200/300"}}
                    />
                    <Image
                        style={{ flex: 1, height: 500 }}
                        source={{ uri: "https://picsum.photos/200/300" }}
                    />
            </Card>
        );
    }
}
