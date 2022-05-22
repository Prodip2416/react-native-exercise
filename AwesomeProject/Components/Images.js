import React from "react";
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

const Images = () => {
//   const styles = StyleSheet.create({
//     container: {
//       paddingTop: 50,
//     },
//     tinyLogo: {
//       width: 50,
//       height: 50,
//     //   blurRadius:5
//     //   resizeMode: 'stretch',
//     }
//   });
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  const image = { uri: "https://reactjs.org/logo-og.png" };

  return (
    <View style={styles.container}>
         <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        // blurRadius={2}
        // fadeDuration={300}
        // onProgress={false}
        resizeMode='cover'
      /> */}
    </View>
  );
};

export default Images;
