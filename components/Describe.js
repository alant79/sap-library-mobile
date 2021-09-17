import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from './UI/CustomButton';
import CustomList from './UI/CustomList';
import { useSelector } from 'react-redux';

export default function App(props) {

    const [functionId, setFunctionId] = useState('')
    const [typeDesc, setTypeDesc] = useState('')

    useEffect(() => {
        setFunctionId(props.functionId)
    }, [props.functionId])

    const addDesc = (descList, nameDesc, data) => {
        let res = 0
        data.map(el => {
            if (el.functionId === functionId) {
                res += 1
            }
        })
        if (res > 0) {
            descList.push({ name: `${nameDesc} (${res})`, type: nameDesc, id: nameDesc, isActive: nameDesc == typeDesc })
        }
    }

    const addBodyList = (localBodyList, data) => {
        data.map(el => {
            if (el.functionId == functionId) {
                const obj = { id: el.id, name: el.name }
                if (el.desc) {
                    obj.desc = el.desc
                }
                localBodyList.push(obj)
            }
        })
    }

    const headerList = useSelector(state => {
        const localHeaderList = []
        state.sapData.data.map(el => {
            if (el.user === props.login) {
                el.transactions && addDesc(localHeaderList, 'transactions', el.transactions)
                el.refs && addDesc(localHeaderList, 'refs', el.refs)
                el.badies && addDesc(localHeaderList, 'badies', el.badies)
                el.bapies && addDesc(localHeaderList, 'bapies', el.bapies)
                el.classes && addDesc(localHeaderList, 'classes', el.classes)
                el.exprs && addDesc(localHeaderList, 'exprs', el.exprs)
                el.fms && addDesc(localHeaderList, 'fms', el.fms)
                el.files && addDesc(localHeaderList, 'files', el.files)
            }
        })
        if (localHeaderList.length >= 1 && typeDesc == '') {
            localHeaderList[0].isActive = true
        }
        return localHeaderList
    });

    const bodyList = useSelector(state => {
        const localBodyList = []
        typeDesc && state.sapData.data.map(el => {
            if (el.user === props.login) {
                switch (typeDesc) {
                    case 'transactions':
                        el.transactions && addBodyList(localBodyList, el.transactions)
                        break;
                    case 'refs':
                        el.refs && addBodyList(localBodyList, el.refs)
                        break;
                    case 'badies':
                        el.badies && addBodyList(localBodyList, el.badies)
                        break;
                    case 'bapies':
                        el.bapies && addBodyList(localBodyList, el.bapies)
                        break;
                    case 'classes':
                        el.classes && addBodyList(localBodyList, el.classes)
                        break;
                    case 'exprs':
                        el.exprs && addBodyList(localBodyList, el.exprs)
                        break;
                    case 'fms':
                        el.fms && addBodyList(localBodyList, el.fms)
                        break;
                    case 'files':
                        el.files && addBodyList(localBodyList, el.files)
                        break;
                    default:
                        break;
                }

            }
        })

        return localBodyList
    });

    const handlerHeaderPress = (id) => {
        setTypeDesc(id)
    }


    const handlerBodyPress = (id) => {

    }


    return (

        <View>
            <View style={styles.descHeaderСontainer}>
                {
                    headerList.map((item) => {
                        return (
                            <CustomButton title={item.name} id={item.type} key={item.type} onPress={handlerHeaderPress} isActive={item.isActive} />
                        )
                    })
                }
            </View>
            <View style={styles.descBodyСontainer}>
                <CustomList data={bodyList} onPress={handlerBodyPress} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    descBodyСontainer: {
        overflow: 'hidden',
        width: '100%',
        padding: 2,
        maxHeight: '80%'
    },
    descHeaderСontainer: {
        flexDirection: 'row',
        padding: 2,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: 'blue',
    }
});