import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import CustomButton from './UI/CustomButton';
import CustomList from './UI/CustomList';

export default function App(props) {

    const homeFunction = {
        name: 'home', id: '000000000000', isActive: true
    }

    const [functionId, setFunctionId] = useState('')

    const bodyList = useSelector(state => {
        const localBodyList = []
        state.sapData.data.map(el => {
            if (el.user === props.login) {
                el.functions.map(elF => {
                    if (functionId == '' || elF.parent === functionId) {
                        localBodyList.push(elF)
                    }
                })
            }
        })
        return localBodyList
    });

    const getParentFunctions = (id, destArr) => {
        console.log('getParentFunctions', srcArr)

        srcArr && srcArr.map(el => {
            if (el.parent === id) {
                destArr.unshift(el)
                console.log('итог', destArr)
                getParentFunctions(el.id, srcArr, destArr)
            }
        })
    }

    const headerList = useSelector(state => {
        const localHeaderList = []
        functionId && state.sapData.data.map(el => {
            if (el.user === props.login) {
                el.functions.map(elF => {
                    if (elF.id === functionId) {
                        localHeaderList.unshift(el)
                        if (el.parent) {
                            getParentFunctions(el.parent, localHeaderList)
                        }
                    }
                })

            }
        })
        localHeaderList.unshift(homeFunction)
        return localHeaderList
    });

    const handlerBodyPress = (id) => {
        setFunctionId(id)
    }

    const handlerHeaderPress = (id) => {
        setFunctionId(id)
    }


    return (
        <View style={styles.funcСontainer}>
            <View style={styles.funcHeaderСontainer}>
                {
                    headerList.map((item) => {
                        return (
                            <CustomButton title={item.name} id={item.id} key={item.id} onPress={(id) => handlerHeaderPress(id)} isActive={item.isActive} />
                        )
                    })
                }

            </View>
            <View style={styles.funcBodyСontainer}>
                <CustomList data={bodyList} onPress={(id) => handlerBodyPress(id)} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    funcСontainer: {
        height: '100%'
    },
    funcBodyСontainer: {
        overflow: 'hidden',
        width: '100%',
        maxHeight: '80%'
    },
    funcHeaderСontainer: {
        flexDirection: 'row',
        padding: 2,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: 'black',
    }
});