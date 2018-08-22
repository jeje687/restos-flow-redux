//@flow
import React, { Component, PureComponent } from "react";
import { View, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { Card, ListItem, Button, Rating, Badge } from "react-native-elements";
import { connect } from "react-redux";
import PlaceService from "@model/services/PlaceService";
import type { State as GlobalState } from "@reducers";
import type {Place} from "@model/Entity/Place";

interface Props {
    id : string;
    place: Place;
}


class Row extends Component<Props,{}>{
    render() {
        var {place} = this.props;
    return (
        <Card containerStyle={{padding: 0}}>
            <Animatable.Text animation="slideInLeft" style={{fontSize: 20, margin: 10}}>{place.name}</Animatable.Text>
            <View style={{width:"100%", height: 150}}>
                {place.photos.length > 0 && <Image
                    style={{width:"100%", height: 150}}
                    source={{uri: PlaceService.getImageUri(place.photos[0].photo_reference, 300, 300)}}
                />}
                <Animatable.View animation="slideInRight">
                    <Badge containerStyle={{ padding: 5, position: 'absolute', top: -25,right:5, backgroundColor: 'white'}}>
                        <Rating
                            type="star"
                            readonly
                            startingValue={place.rating}
                            imageSize={15}
                        />
                    </Badge>
                </Animatable.View>
            </View>
            <Text style={{ margin : 10 }}>
                The idea with React Native Elements is more about
                component structure than actual design.
            </Text>
        </Card>
    );}
}
const mapStateToProps = (state : GlobalState, ownProps : Props) => ({
    place: state.places.places[ownProps.id]
});
export default connect(
    mapStateToProps
)(Row);