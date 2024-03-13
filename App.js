import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TextInput, FlatList, ScrollView, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import User from './src/User';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerRight:()=><TextInput/>}}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Home} options={{headerRight:()=><TextInput/>}}/>
    //     <Tab.Screen name="Login" component={Login}/>
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}
const Signup=()=>{
  return<>
    <Text>Signup</Text>
  </>
}
const Login=(props)=>{
  const name=props.route.params;
  return <>
    <View>
      <Text>Login Page {name}</Text>
    </View>
  </>
}
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home=(props)=>{
  const [name,setName]=useState("Tuhin")
  const btnHandler=()=>{
    setName("Salman")
  }
  const textHandler=(text)=>{
    console.log(text)
  }
  const user=[
    {
      name:'Rohit'
    }
    ,
    {
      name:'Mohit'
    },
    {
      name:'sudeep'
    }
    ,
    {
      name:'Sumit'
    }
  ]
  const [radio,setRadio]=useState(false);
  const radioHandler=()=>{
    setRadio(!radio)
  }
  const [modal,setModal]=useState(false);
  const modalHandler=()=>{
    setModal(!modal);
  }
  const submitHandler=()=>{
    console.log("Api called")
    fetch("http://192.168.1.3:8081/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:"Sohit"})
    }).then((result)=>{
      console.log(result.json())
      console.log("Data sent")
    }).catch((er)=>{
      console.log("error occured")
      console.log(er)
    })
  }
  const setData=async()=>{
    await AsyncStorage.setItem("name","Tuhin");
  }
  const getData=async()=>{
    const name=await AsyncStorage.getItem("name");
    console.warn(name)
  }
  const removeData=async()=>{
    await AsyncStorage.removeItem("name")

  }
  return <>
  <View style={styles.container}>
    <Text>Hello there</Text>
    <StatusBar style="auto" />
    <Text style={style.text}>Hey from mars {name}</Text>
    <Userdata name={name}/>
    <TextInput style={style.textinput} placeholder='Write your name' onChangeText={(text)=>textHandler(text)}></TextInput>
    <User/>
    <Button title='Press me' onPress={btnHandler}/>
    <Button title='Set Data' onPress={setData}></Button>
    <Button title='Get Data' onPress={getData}></Button>
    <Button title='Remove Data' onPress={removeData}></Button>

    <FlatList
      data={user}
      renderItem={({item})=><Text>{item.name}</Text>}
    >
    </FlatList>
    <ScrollView>
    {
      user.map((item)=>(
        <Text style={style.text} key={item.name}>{item.name}</Text>
      ))
    }
    </ScrollView>
  </View>
  <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    <Text style={style.flex}>Sam</Text>
    <Text style={style.flex}>Sam</Text>
    {
      user.map((item)=>(
        // <Text style={style.flex}>{item.name}</Text>
        <User key={item.name}/>
      ))
    }
  </View>
  <View>
    <TouchableHighlight style={style.btn} onPress={modalHandler}><Text style={style.btntext}>Press me</Text></TouchableHighlight>
  </View>
  <View style={style.box}>
    <TouchableOpacity onPress={radioHandler}>
      <View style={style.container}>
        <View style={style.radio}>{radio && <View style={style.check}></View>}</View>
        <View><Text>Radio</Text></View>
      </View>
    </TouchableOpacity>
    <ActivityIndicator color={'red'} animating={false}></ActivityIndicator>
  </View>
  <Modal transparent={true} visible={modal} animationType='slide'>
    <View style={style.modal}>
      <Text style={style.modaltext}>Hi i am a modal</Text>
      <Button title='close' style={style.modalbtn}
      onPress={modalHandler}></Button>
    </View>
  </Modal>
  <View>
    <StatusBar backgroundColor='orange' barStyle='light-content' hidden={false}/>
  </View>
  <Pressable onPressIn={()=>{
    console.warn("Pressed In")
  }} onPressOut={()=>{
    console.warn("Pressed out")
  }}
  onLongPress={()=>{
    console.warn("Long Pressed")
  }}>
    <Text>Different Button</Text>
  </Pressable>
  <Button title='Login page' onPress={() => props.navigation.navigate('Login',{name:"Tuhin"})}></Button>
  <Button title='Send Data' onPress={submitHandler}></Button>

  </>
}
const Userdata=(props)=>{
  return <>
    <Text>{props.name}</Text>
  </>
}
const style=StyleSheet.create({
  modal:{
    backgroundColor:'lightyellow',
    minHeight:100,
    minWidth:300,
    textAlign:'center',
    padding:'auto',
    marginTop:'auto',
    marginBottom:'auto',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  modaltext:{
    textAlign:'center',
    paddingBottom:10,
  },
  modalbtn:{
    width:100,
    backgroundColor:'red',
    marginRight:10
  },
  box:{
    borderColor:'red',
    borderWidth:1,
    textAlign:'center'
  },
  container:{
    marginLeft:'auto',
    marginRight:'auto',
    borderColor:'red',
    borderWidth:1,
    width:300,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  radio:{
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    minWidth:20,
    marginRight:4
  },
  check:{
    borderColor:'black',
    borderWidth:2,
    minHeight:15,
    margin:2,
    borderRadius:20,
    backgroundColor:'black',
    minWidth:15
  },
  btntext:{
    borderColor:'red',
    borderWidth:2,
    textAlign:'center',
    padding:5
  },
  btn:{
    borderColor:'red',
    borderWidth:1,
    width:100,
    textAlign:'center',
    margin:12, 
    backgroundColor:'green'
  },
  flex:{
    padding:30,
    backgroundColor:'red',
    margin:1
  },
  text:{
    color:'red',
    paddingBottom:10
  },
  textinput:{
    borderWidth:2,
    borderColor:'black',
    padding:8,
    borderRadius:10
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    borderBlockColor:'red',
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
