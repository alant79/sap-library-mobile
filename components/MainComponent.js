import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Login from '../components/Login';
import FunctionsWithContent from '../components/FunctionsWithContent';
import * as dataActions from '../store/actions/data';

export default function MainCocmponent() {

    const [login, setLogin] = useState('')

    const users = useSelector(state => {
        const localUsers = []
        state.sapData.data.map(el => localUsers.push(el.user))
        return localUsers
    });

    const userFunctions  = useSelector(state => {
        const locaFunctions = []
        state.sapData.data.map(el => {
            if (el.user === login) {
                el.functions.map(elF => {
                    locaFunctions.push(elF)
                })
            }
        })
        return locaFunctions
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataActions.fetchData())

    }, [dispatch])


    const handlerOnChangeLogin = (value) => {
        setLogin(value)
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.loginContainer}>
                <Login users={users} onChangeLogin={handlerOnChangeLogin} />
            </View>
            <View style={styles.functionContainer}>
                <FunctionsWithContent login={login} userFunctions={userFunctions} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    loginContainer: {
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    functionContainer: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
});
