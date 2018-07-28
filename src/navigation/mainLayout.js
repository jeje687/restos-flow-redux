//@flow
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Profile from "@screens/Profile";
import Home from "@screens/Home";
import Search from "@screens/Search";
import Icon from "react-native-vector-icons/FontAwesome";

var backgroundColors = {
    Home: "#694fad",
    Search: "#00A779",
    Profile: "#FF5C00"
};

function getNavOptions({ navigation }){
    return ({
        tabBarColor: backgroundColors[navigation.state.routeName],
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === "Home") {
                iconName = "home";
            } else if (routeName === "Profile") {
                iconName = "user-circle";
            } else if (routeName === "Search") {
                iconName = "search";
            }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return (
                <Icon
                    name={iconName}
                    size={20}
                    color={
                        focused
                            ? "white"
                            : "rgba(0, 0, 0, 0.50)"
                    }
                />
            );
        }
    });
}

export default createMaterialBottomTabNavigator(
    {
        Home: { screen: Home },
        Search: { screen: Search },
        Profile: { screen: Profile }
    },
    {
        initialRouteName: "Home",
        shifting: true,
        navigationOptions: getNavOptions
    }
);
