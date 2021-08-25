import { StyleSheet,  View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from './components/CustomButton';
import CustomList from './components/CustomList';
import Login from './components/Login';

export default function App() {

  const initialDescList = []
  initialDescList.push({name:'Transactions (5)', id: '00000001', isActive: true})
  initialDescList.push({name:'BADI (8)', id: '00000002', isActive: false})
  initialDescList.push({name:'Classes (10)', id: '00000003', isActive: false})
  initialDescList.push({name:'Programs (7)', id: '00000004', isActive: false})
  const initialTransactions = []
  initialTransactions.push({name: 'SE11', id: '00000001', desc: 'Транзакция SE11 cxvcxvxcvxcvxcvxv'})
  initialTransactions.push({name: 'SE12', id: '00000002', desc: 'Транзакция SE12'})
  initialTransactions.push({name: 'SE13', id: '00000003', desc: 'Транзакция SE13'}) 
  initialTransactions.push({name: 'SE14', id: '00000004', desc: 'Транзакция SE14'}) 
  initialTransactions.push({name: 'SE15', id: '00000005', desc: 'Транзакция SE15'}) 
  initialTransactions.push({name: 'SE16', id: '00000006', desc: 'Транзакция SE16'}) 
  initialTransactions.push({name: 'SE17', id: '00000007', desc: 'Транзакция SE17'}) 
  initialTransactions.push({name: 'SE18', id: '00000008', desc: 'Транзакция SE18'}) 
  initialTransactions.push({name: 'SE19', id: '00000009', desc: 'Транзакция SE19'}) 
  initialTransactions.push({name: 'SE20', id: '00000010', desc: 'Транзакция SE20'}) 
  initialTransactions.push({name: 'SE21', id: '00000011', desc: 'Транзакция SE21'}) 
  initialTransactions.push({name: 'SE22', id: '00000012', desc: 'Транзакция SE22'})   

  const [login, setLogin] = useState()
  const [descList, setDescList] = useState(initialDescList)
  const [listTrsansactions, setListTrsansactions] = useState(initialTransactions)  
  const advText = `sdgdgdfgs 
  \nsfsdfd 
  \ndsfdsfdsf 
  \nsdfdsfdsfsdf
  \nsfsdfd 
  \ndsfdsfdsf 
  \nsdfdsfdsfsdf
  \nsfsdfd 
  \ndsfdsfdsf 
  \nsdfdsfdsfsdf 
  \nsgsdgsdgsdg`

  useEffect(()=> {},[login])

  const handlerBodyPress = (id) => {
  
  }

  const handlerOnChangeLogin = (value) => {
    setLogin(value)
  }


  const handlerHeaderPress = (id) => {
    setDescList((prevState) => {
      const newArr = []
      prevState.map(el => {
        newArr.push({...el, isActive: el.id === id})
      })
      return newArr
  })}

  return (
    <View style={styles.appContainer}>
      <View style={styles.loginContainer}>
        <Login onChangeLogin={handlerOnChangeLogin}/>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.funcDescСontainer}>
          <View style={styles.funcСontainer}>
            <View style={styles.funcHeaderСontainer}>


            </View>
            <View style={styles.funcBodyСontainer}>


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
        <View style={styles.advdescСontainer}>
          {<TextInput
            style={{height:'100%'}}
            numberOfLines='10'
            multiline={true}
            value={advText} />}
        </View>
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
  login: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginLabel: {
    marginRight: 10
  },
  picker: {
    fontSize: 8
  },
  contentContainer: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  funcDescСontainer: {
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  },
  descСontainer: {
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    padding: 2
  },
  descBodyСontainer: {
    overflow: 'hidden',
    width: '100%',
    maxHeight: '80%'
  },
  funcСontainer: {
    width: '50%',
    height: '100%',
    borderRightWidth: 1,
    borderColor: 'black' 
  },
  advdescСontainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'black',
    height: '50%',
    width: '100%'
  },
  innerLoginView: {
    alignItems: 'center'
  },
  picker: {
    flex: 1,
    height: 30,
    width: 300
  },
  pickerItem: {
    fontSize: 8,
    textTransform: 'lowercase'
  },
  descHeaderСontainer: {
    flexDirection: 'row',
    padding: 2,
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: 'black',
  }

});
