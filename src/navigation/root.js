import { StackNavigator } from 'react-navigation';
import {mainLayout} from "./mainLayout";

import Login from '@screens/Login';

const stackNavigatorConfig = {
  initialRouteName: 'Home',
};

export default StackNavigator({
    Home: {
        screen: mainLayout,
    },
}, stackNavigatorConfig);
