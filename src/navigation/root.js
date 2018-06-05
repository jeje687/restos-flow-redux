import { StackNavigator } from 'react-navigation';

import LoginViewModel from './../screens/Login/LoginViewModel';

const stackNavigatorConfig = {
  initialRouteName: 'Login',
};

export default StackNavigator({
    Login: {
        screen: LoginViewModel,
    },
}, stackNavigatorConfig);
