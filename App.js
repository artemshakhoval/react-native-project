import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  View,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./components/screens/welcomeScreen";

export default function App() {
  return <WelcomeScreen />;
  //<SafeAreaView style={styles.container}>
  /*<View
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: "30%",
        }}
      ></View>*/
  /*<Text>Hello Ann!!!</Text>
      <TouchableOpacity>
        <Image
          source={{
            width: 300,
            height: 400,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <Button
        title="Click to call alert"
        onPress={() =>
          Alert.alert("My alert", "New message", [
            { text: "Yes" },
            { text: "No" },
          ])
        }
      />
      <Button
        title="Click to call promt"
        onPress={() =>
          Alert.prompt("New promt", "Write something", (text) =>
            console.log(text)
          )
        }
      ///>*/
  //</SafeAreaView>
  //);
}

//const styles = StyleSheet.create({
//  backgroundImg: {
//    flex: 1,
//    width: "100%",
//    height: "100%",
//    //justifyContent: "center",
//    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//  },
//});
