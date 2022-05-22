import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const HungryCat = ({ name }) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{ marginTop: 20 }}>
      <Text>
        I'm {name}, and I'm {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => setIsHungry(false)}
        title={isHungry ? "Pour me some milk, please!" : "Thank You"}
        disabled={!isHungry}
      />
    </View>
  );
};

export default HungryCat;
