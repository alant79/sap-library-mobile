import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Functions from '../components/Functions'
import Describe from '../components/Describe'
import { constants } from '../constants'

export default function App(props) {

    const [functionId, setFunctionId] = useState('')
    const [advFunc, setAdvFunc] = useState('') 
    const [advDesc, setAdvDesc] = useState('')   

    const handleAdvTextFunction = (obj) => {
        setAdvFunc(obj)
        setAdvDesc('')
    }

    const handleAdvTextDesc = (arr) => {
        setAdvDesc(arr)
        advFunc.isActive = (arr.length === 0)
    }

    useEffect(()=> {
        const headerList = []
        advFunc && headerList.push(advFunc)
        advDesc && advDesc.map(el => {
            headerList.push(el)
        })
        props.changeAdvText(headerList)   
    },[advFunc, advDesc])

    useEffect(()=> {
        setFunctionId('')
    },[props.login])

    const handleDesc = (id) => {
        setFunctionId(id)
    }

    return (
        <View style={styles.funcDescСontainer}>
            <View style={styles.funcСontainer}>
                <Functions login={props.login} userFunctions={props.userFunctions} changeAdvText={(obj) => handleAdvTextFunction(obj)} changeDesc={(id) => handleDesc(id)} />
            </View>
            <View style={styles.descСontainer}>
                {functionId === '' ?
                    <View style={styles.descHomeСontainer}>
                        <Text>{constants.homeDesc}</Text>
                    </View>
                    :
                    <Describe login={props.login} functionId={functionId} changeAdvText={(arr) => handleAdvTextDesc(arr)} />
                }
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
    },
    descHomeСontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },    
});