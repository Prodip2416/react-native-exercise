import React from "react";
import { View, Text, Image } from "react-native";

const Cat = ({ name }) => {
  return (
    <View>
      <View>
        <Text>Hello I'm {name}</Text>
      </View>
      <View>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Hello, I am your cat!</Text>
      </View>
    </View>
  );
};

export default Cat;
