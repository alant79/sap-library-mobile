import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FunctionsWithDescribe from '../components/FunctionsWithDescribe'
import AdvDescribe from '../components/AdvDescribe'
import { constants } from '../constants'

export default function App(props) {


    const [headerList, setHeaderList] = useState([])
    const handleAdvText = (paramHeaderList) => {
        setHeaderList(paramHeaderList)
    }

    useEffect(()=> {
        setHeaderList([])
    },[props.login])

    return (
        <View style={styles.contentContainer}>
            <View style={styles.funcDescСontainer}>
                <FunctionsWithDescribe login={props.login} userFunctions={props.userFunctions} changeAdvText={(paramHeaderList) => handleAdvText(paramHeaderList)} />
            </View>
            <View style={styles.advdescСontainer}>
                {(headerList.length > 0) ? <AdvDescribe headerList={headerList} /> : <View style={styles.advdescHomeСontainer}>
                    <Text>{constants.homeAdvdesc}</Text>
                </View>}
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
        width: '100%',
    },
    advdescHomeСontainer: {
        height: '100%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
});