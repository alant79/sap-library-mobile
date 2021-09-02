import React from 'react';
import { View, TextInput } from 'react-native';


export default function App(props) {

    return (
        <TextInput
            style={{ height: '100%' }}
            numberOfLines='5'
            multiline={true}
            value={props.advText} />

    )
}
