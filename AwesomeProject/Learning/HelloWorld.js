import React from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";

const HelloWorld = () => {
  return (
    <ScrollView>
      <Text style={{ marginTop: 20 }}>Some text here</Text>
      <View>
        <Text>Some more text here</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="enter something"
      />
    </ScrollView>
  );
};

export default HelloWorld;
