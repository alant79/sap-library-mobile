import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from './UI/CustomButton';

export default function App(props) {

    const [advText, setAdvText] = useState('')
    const [id, setId] = useState('')
    const [headerList, setHeaderList] = useState([])

    useEffect(() => {
        const localHeaderList = props.headerList
        localHeaderList && localHeaderList.map(el => {
            if (id !== '') {
                if (el.id === id) {
                    el.isActive = true
                    setAdvText(el.advText)
                } else {
                    el.isActive = false
                }
            } else {
                if (el.isActive) {
                    setAdvText(el.advText)
                }
            }
        })
        setHeaderList(localHeaderList)
    }, [props.headerList,id])

    const handlerHeaderPress = (id) => {
        setId(id)
    }

    return (
        <View style={styles.advDescСontainer}>
            <View style={styles.advDescHeaderСontainer}>
                {
                    headerList.map((item) => {
                        return (
                            <CustomButton title={item.name} id={item.id} key={item.id} onPress={(id) => handlerHeaderPress(id)} isActive={item.isActive} />
                        )
                    })
                }

            </View>
            <View style={styles.advDescBodyСontainer}>
                <TextInput
                    style={{ height: '100%' }}
                    multiline={true}
                    value={advText} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    advDescСontainer: {
        height: '100%'
    },
    advDescBodyСontainer: {
        overflow: 'hidden',
        width: '100%',
        padding: 2,
        maxHeight: '80%'
    },
    advDescHeaderСontainer: {
        flexDirection: 'row',
        padding: 2,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: 'blue',
    }
});