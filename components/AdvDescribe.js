import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';


export default function App(props) {

    const [advText, setAdvText] = useState('')
    const [id, setId] = useState('')

    const headerList = []

    useEffect(()=> {
        if (props.id) {
            setId(props.id)
        }
        headerList = props.headerList
        headerList.map(el=> {
            if ( el.id === id) {
                el.isActive = true
                setAdvText(el.advText)
            } else {
                el.isActive = false
            }

        })
    },[props.headerList])

    const handlerHeaderPress = (id) => {
        setId(id)
    }

    return (
        <View style={styles.advDescСontainer}>
            <View style={styles.advDescBodyСontainer}>
                {
                    headerList.map((item) => {
                        return (
                            <CustomButton title={item.name} id={item.id} key={item.id} onPress={(id) => handlerHeaderPress(id)} isActive={item.isActive} />
                        )
                    })
                }

            </View>
            <View style={styles.advDescHeaderСontainer}>
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
        maxHeight: '80%'
    },
    advDescHeaderСontainer: {
        flexDirection: 'row',
        padding: 2,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: 'black',
    }
});