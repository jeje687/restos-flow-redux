// @flow

import {StyleSheet} from 'react-native';
import type {stylePropType} from '../../utils/StylesType';

type Styles = {
    container: stylePropType
}

export const styles : Styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        width: '80%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
