import React, {useState} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App(props) {

    const initialLoginList = []
    initialLoginList.push('ANTON.ALEXEYEV@ALPECONSULTING.COM')
    initialLoginList.push('KONSTANTIN.GACHECHILADZE@ALPECONSULTING.COM')
    initialLoginList.push('ANTON.BREIKOV@ALPECONSULTING.COM')
    initialLoginList.push('VIKTOR.YURZANOV@ALPECONSULTING.COM')
    initialLoginList.push('ANTON.VAKHLAMEEV@@ALPECONSULTING.COM')

    const [loginList, setLoginList] = useState(initialLoginList)
    return (
        <View style={styles.login}>
            {<View style={styles.innerLoginView}>
                <Text style={styles.loginLabel}>Login:</Text>
            </View>}
            <View style={styles.innerLoginView}>
                <Picker style={styles.picker} onValueChange={(value) => { props.onChangeLogin(value) }}>
                    {
                        loginList.map((item, index) => {
                            return (<Picker.Item style={styles.pickerItem} label={item} value={index} key={index} />)
                        })
                    }
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
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