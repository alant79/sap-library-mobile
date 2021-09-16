import React, { useState } from 'react';
import { StyleSheet, View,  } from 'react-native';
import FunctionsWithDescribe from '../components/FunctionsWithDescribe'
import AdvDescribe from '../components/AdvDescribe'
import {constants}  from '../constants'

export default function App(props) {

    const [advText, setAdvText] = useState(constants.homeAdvdesc)
    const handleAdvText = (text) => {
        setAdvText(text)
    }

    return (
        <View style={styles.contentContainer}>
            <View style={styles.funcDescСontainer}>
               <FunctionsWithDescribe login = {props.login} userFunctions = {props.userFunctions} changeAdvText={(text)=>handleAdvText(text)}/>
            </View>
            <View style={styles.advdescСontainer}>
               <AdvDescribe advText={advText}/>
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