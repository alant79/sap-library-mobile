import React from 'react';
import { StyleSheet, View } from 'react-native';
import Functions from '../components/Functions'
import Describe from '../components/Describe'

export default function App(props) {

    return (
        <View style={styles.funcDescСontainer}>
            <View style={styles.funcСontainer}>
                <Functions login = {props.login} userFunctions = {props.userFunctions}/>
            </View>
            <View style={styles.descСontainer}>
                <Describe/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    funcDescСontainer: {
        flexDirection: 'row',
        height: '100%',
        width: '100%'
    },
    funcСontainer: {
        width: '50%',
        height: '100%',
        borderRightWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        padding: 2
    },
    descСontainer: {
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        padding: 2
    }
});