import React from "react";
import { Pressable, Text, View } from "react-native";

const Pressables = () => {
  const onPressFunction = () => {
    alert("hello...");
  };
  return (
    <View>
      <Pressable onPress={onPressFunction}>
        <Text>I'm onPress!</Text>
      </Pressable>
      <Pressable style={{marginTop:20}} onPressIn={onPressFunction}>
        <Text>I'm onPressIn!</Text>
      </Pressable>
      <Pressable style={{marginTop:20}} onPressOut={onPressFunction}>
        <Text>I'm onPressOut!</Text>
      </Pressable>
      <Pressable style={{marginTop:20}} onLongPress={onPressFunction}>
        <Text>I'm onLongPress!</Text>
      </Pressable>
    </View>
  );
};

export default Pressables;
