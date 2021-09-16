import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App(props) {

    const [login, setLogin] = useState('')

    const handleChangeLogin = (value) => {
        setLogin(value)
        props.onChangeLogin(value)
    }

    useEffect(()=> {
        props.onChangeLogin(props.users[0])
    }, [])
 
    return (
        <View style={styles.login}>
            {<View style={styles.innerLoginView}>
                <Text style={styles.loginLabel}>Login:</Text>
            </View>}
            <View style={styles.innerLoginView}>
                <Picker style={styles.picker}  selectedValue={login} prompt='Login:' onValueChange={(value) => { handleChangeLogin(value) }}>
                    {
                        props.users.map((item, index) => {
                            return (<Picker.Item style={styles.pickerItem} label={item} value={item} key={index} />)
                        })
                    }
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginLabel: {
        marginRight: 10
    },
    innerLoginView: {
        alignItems: 'center'
    },
    picker: {
        flex: 1,
        height: 30,
        width: 300,
        fontSize: 10
    },
    pickerItem: {
        textTransform: 'lowercase'
    }
});