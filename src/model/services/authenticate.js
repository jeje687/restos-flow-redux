// @flow
//
import { google } from 'react-native-simple-auth';
import type {Credentials} from '../Entity/Credentials';
import type {User} from '../Entity/User';
export default class AuthenticationServices {

    static authenticate = async () => {
        let googleData : { [key: string] : string } = {
            appId: '782978039612-50mqvevn9g77f8bkolf96abnmk68p77m.apps.googleusercontent.com',
            callback: 'com.mymovies:/oauth2redirect',
        }

        try {
            let usersInfos = await google(googleData);
            let credentials : Credentials = usersInfos.credentials;
            let user : User = usersInfos.user;
            return {user : user, credentials : credentials};
        }
        catch(error){
            return error;
        }

    }

}
