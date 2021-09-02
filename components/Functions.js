import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from './UI/CustomButton';
import CustomList from './UI/CustomList';

export default function App(props) {
    console.log(props)

    const initialDescList = []
    initialDescList.push({ name: 'Transactions (5)', id: '00000001', isActive: true })
    initialDescList.push({ name: 'BADI (8)', id: '00000002', isActive: false })
    initialDescList.push({ name: 'Classes (10)', id: '00000003', isActive: false })
    initialDescList.push({ name: 'Programs (7)', id: '00000004', isActive: false })
    const initialTransactions = []
    initialTransactions.push({ name: 'SE11', id: '00000001', desc: 'Транзакция SE11 cxvcxvxcvxcvxcvxv' })
    initialTransactions.push({ name: 'SE12', id: '00000002', desc: 'Транзакция SE12' })
    initialTransactions.push({ name: 'SE13', id: '00000003', desc: 'Транзакция SE13' })
    initialTransactions.push({ name: 'SE14', id: '00000004', desc: 'Транзакция SE14' })
    initialTransactions.push({ name: 'SE15', id: '00000005', desc: 'Транзакция SE15' })
    initialTransactions.push({ name: 'SE16', id: '00000006', desc: 'Транзакция SE16' })
    initialTransactions.push({ name: 'SE17', id: '00000007', desc: 'Транзакция SE17' })
    initialTransactions.push({ name: 'SE18', id: '00000008', desc: 'Транзакция SE18' })
    initialTransactions.push({ name: 'SE19', id: '00000009', desc: 'Транзакция SE19' })
    initialTransactions.push({ name: 'SE20', id: '00000010', desc: 'Транзакция SE20' })
    initialTransactions.push({ name: 'SE21', id: '00000011', desc: 'Транзакция SE21' })
    initialTransactions.push({ name: 'SE22', id: '00000012', desc: 'Транзакция SE22' })

    const [descList, setDescList] = useState(initialDescList)
    const [listTrsansactions, setListTrsansactions] = useState(initialTransactions)

    const handlerHeaderPress = (id) => {
        setDescList((prevState) => {
            const newArr = []
            prevState.map(el => {
                newArr.push({ ...el, isActive: el.id === id })
            })
            return newArr
        })
    }

    const handlerBodyPress = (id) => {

    }


    return (
            <View style={styles.funcDescСontainer}>
                <View style={styles.funcСontainer}>
                    <View style={styles.funcHeaderСontainer}>


                    </View>
                    <View style={styles.funcBodyСontainer}>
                        <CustomList data={props.userFunctions} onPress={handlerBodyPress} />
                    </View>

                </View>
                <View style={styles.descСontainer}>
                    <View style={styles.descHeaderСontainer}>
                        {
                            descList.map((item) => {
                                return (
                                    <CustomButton title={item.name} id={item.id} key={item.id} onPress={handlerHeaderPress} isActive={item.isActive} />
                                )
                            })
                        }
                    </View>
                    <View style={styles.descBodyСontainer}>
                        <CustomList data={listTrsansactions} onPress={handlerBodyPress} />
                    </View>

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
    funcBodyСontainer: {
        overflow: 'hidden',
        width: '100%',
        maxHeight: '80%'
    }, 
    descBodyСontainer: {
        overflow: 'hidden',
        width: '100%',
        maxHeight: '80%'
    }, 
    descHeaderСontainer: {
        flexDirection: 'row',
        padding: 2,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: 'black',
    }
});