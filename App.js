import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TextInput, FlatList, ScrollView } from 'react-native';
import User from './src/User';
import { useEffect, useState } from 'react';
export default function App() {
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
  useEffect(()=>{
    console.warn("Hello")
  },[])
  return (
    <>
    <View style={styles.container}>
      <Text>Hello there</Text>
      <StatusBar style="auto" />
      <Text style={style.text}>Hey from mars {name}</Text>
      <Userdata name={name}/>
      <TextInput style={style.textinput} placeholder='Write your name' onChangeText={(text)=>textHandler(text)}></TextInput>
      <User/>
      <Button title='Press me' onPress={btnHandler}/>
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
    
    </>
  );
}
const Userdata=(props)=>{
  return <>
    <Text>{props.name}</Text>
  </>
}
const style=StyleSheet.create({
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
