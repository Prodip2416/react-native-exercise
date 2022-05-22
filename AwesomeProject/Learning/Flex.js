import React from 'react';
import { View,Button } from 'react-native';

const Flex = () => {
    const onPressButton=()=>{
        alert('hello react native')
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
            <View style={{backgroundColor:'powderblue', width:100,height:100}}>
            <Button
            onPress={onPressButton}
            title="Press Me"
          />
            </View>
            <View style={{backgroundColor:'skyblue', width:100,height:100}}></View>
            <View style={{backgroundColor:'steelblue', width:100,height:100}}></View>
            {/* <View style={{flex:1,backgroundColor:'green', width:100,height:100}}></View>
            <View style={{flex:1,backgroundColor:'blue', width:100,height:100}}></View>
            <View style={{flex:1,backgroundColor:'red', width:100,height:100}}></View>
            <View style={{flex:1,backgroundColor:'black', width:100,height:100}}></View>
            <View style={{flex:1,backgroundColor:'yellow', width:100,height:100}}></View> */}
        </View>
    );
};

export default Flex;