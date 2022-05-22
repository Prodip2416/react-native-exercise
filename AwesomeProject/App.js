import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import ActivityIndicator from "./Components/ActivityIndicators";
import FlatListComp from "./Components/FlatListComp";
import Images from "./Components/Images";
import Modals from "./Components/Modals";
import Pressables from "./Components/Pressables";
import RefreshControls from "./Components/RefreshControls";
import Cat from "./Learning/Cat";
import Flex from "./Learning/Flex";
import HandlingTextInput from "./Learning/HandlingTextInput";
import HelloWorld from "./Learning/HelloWorld";
import HungryCat from "./Learning/HungryCat";
import MainComponent from "./Learning/MainComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  adroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
}
});

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello From React Native!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <HelloWorld/>

    // <ScrollView>
    //    <Cat name="Tom" />
    //   <Cat name="Jerry" />
    //   <Cat name="Tott" />
    //   <Cat name="T0dd" />
    //   <Cat name="Marry" /> 

    //    <HungryCat name="Tom"/>
    //   <HungryCat name="Jerry"/>
    //   <HungryCat name="Todd"/>
    //   <HungryCat name="Piter"/>
    //   <HungryCat name="Harry"/> 

    //    <HandlingTextInput /> 
    // </ScrollView>
      <SafeAreaView style={styles.adroidSafeArea}>
        {/* <MainComponent/> */}
        {/* <Flex/> */}
        {/* <ActivityIndicator/> */}
        {/* <FlatListComp/> */}
        {/* <Images/> */}
        {/* <Modals/> */}
        {/* <Pressables/> */}
        <RefreshControls/>
      </SafeAreaView>
  );
}
