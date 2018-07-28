// @flow

import {StyleSheet} from 'react-native';
import type {stylePropType} from '@utils/StylesType';

type Styles = {
    container: stylePropType,
    background_position: stylePropType
}

export const styles : Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background_position: {
        position : 'absolute',
        top: 0,
        bottom : 0,
        left: 0,
        right: 0
    }
});
