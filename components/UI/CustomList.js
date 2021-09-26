import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function CustomList(props) {

    const [selectedId, setSelectedId] = useState(null);

    const handlerPress = (id) => {
        setSelectedId(id)
        props.data.map(el=> {
            if (el.id === id) {
                props.onPress( {
                    id,
                    name: el.name,
                    advdesc: el.advdesc
                })
            }
        })

    }

    useEffect(()=> {
        setSelectedId(null)
    },[props.data])

    const handleOnPress = (name) => {
        console.log('long press ',name)
    }

    const Item = ({ props, backgroundColor, textColor  }) => (
        <TouchableOpacity onPress={() => handlerPress(props.id)} style={[styles.item,backgroundColor ]} onLongPress={()=> handleOnPress(props.name)}>
            <View style={styles.containerItem}>
                <Text style={[styles.name,textColor ]}>{props.name}</Text>
            </View>
            {props.desc && <View style={styles.containerItem}>
                <Text style={[styles.desc,textColor ]}>{props.desc}</Text>
            </View>}       
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "blue" : "white";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
        <Item props={item}  backgroundColor={{ backgroundColor }} textColor={{ color }}/>
    )};

    return (
        <FlatList
            vertical
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%',
        borderBottomWidth: 1,
        borderStyle: 'dashed'
    },
    containerItem: {
        flex: 1
    }
})
