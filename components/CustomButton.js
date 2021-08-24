import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton(props) {

    const handlerOnPress  = (id) => {
        props.onPress(id)
    }

    const backgroundColor = props.isActive === true ? 'blue' : 'white'
    const color = props.isActive === true ? 'white' : 'black'   

    return (
        <TouchableOpacity style={styles.containerComponent} onPress={() => {handlerOnPress(props.id)}}>
            <View style={[styles.containerButton, {backgroundColor}]}>
                <Text style={[styles.textButton, {color}]} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerComponent: {
        margin: 2
    },
    containerButton: {
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1
    },
    textButton: {
        fontSize: 15
    },   
})
