import React from "react";
import { View, Text, Image } from "react-native";

const MainComponent = () => {
  return (
    <View>
      <View style={{ height: 30, backgroundColor: "red" }}>
        <Text> This is a text</Text>
      </View>
      <View style={{ height: 30, color: "white", backgroundColor: "blue" }}>
        <Text> This is another text</Text>
      </View>
      <View>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
};

export default MainComponent;
