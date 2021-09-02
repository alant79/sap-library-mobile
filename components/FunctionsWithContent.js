import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import FunctionsWithDescribe from '../components/FunctionsWithDescribe'
import AdvDescribe from '../components/AdvDescribe'

export default function App(props) {

    return (
        <View style={styles.contentContainer}>
            <View style={styles.funcDescСontainer}>
               <FunctionsWithDescribe login = {props.login} userFunctions = {props.userFunctions}/>
            </View>
            <View style={styles.advdescСontainer}>
               <AdvDescribe advText={'sfdsfsdf'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    funcDescСontainer: {
        flexDirection: 'row',
        height: '50%',
        width: '100%'
    },
    advdescСontainer: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: 'black',
        height: '50%',
        width: '100%'
    }
});