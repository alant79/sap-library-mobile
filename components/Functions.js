import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import CustomButton from './UI/CustomButton';
import CustomList from './UI/CustomList';
import {constants}  from '../constants'

export default function App(props) {

    useEffect(()=> {
        setFunctionId('')
    }, [props.login])

    const homeFunction = {
        name: 'home', id: '', isActive: true, advdesc: constants.homeAdvdesc
    }

    const [functionId, setFunctionId] = useState('')


    const bodyList = useSelector(state => {
        const localBodyList = []
        state.sapData.data.map(el => {
            if (el.user === props.login) {
                el.functions.map(elF => {
                    if (elF.parent === functionId) {
                        localBodyList.push(elF)
                    }
                })
            }
        })
        return localBodyList
    });

    const getParentFunctions = (state, id, destArr) => {
        state.sapData.data.map(el => {
            if (el.user === props.login) {
                el.functions.map(elF => {
                    if (elF.id=== id) {
                        destArr.unshift(elF)
                        destArr[0].isActive = false
                        elF.parent && getParentFunctions(state, elF.parent, destArr)
                    }
                })
            }
          
        })
    }

    const headerList = useSelector(state => {
        const localHeaderList = []
        let onlyHome = true
        functionId && state.sapData.data.map(el => {
            if (el.user === props.login) {
                el.functions.map(elF => {
                    if (elF.id === functionId) {                  
                        localHeaderList.unshift(elF)  
                        localHeaderList[0].isActive = true                  
                        elF.parent && getParentFunctions(state, elF.parent, localHeaderList)
                        onlyHome = false
                    }
                })

            }
        })
        localHeaderList.unshift(homeFunction)
        localHeaderList[0].isActive = onlyHome
        return localHeaderList
    });

    const handlerBodyPress = (id) => {
        setFunctionId(id) 
        getAdvDesc(bodyList,id )
        props.changeDesc(id)
          
    }

    const handlerHeaderPress = (id) => {
        setFunctionId(id)
        getAdvDesc(headerList,id )
    }

    const getAdvDesc = (list, id) => {
        let text = ''
        list.map(el=> {
            if (el.id===id) {
                text =  el.advdesc
                return
            }
        } )
        props.changeAdvText(text)
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