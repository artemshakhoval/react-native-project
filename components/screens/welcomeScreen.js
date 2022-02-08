import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import bgImage from "../../assets/background.jpg";
import logo from "../../assets/logo-red.png";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={bgImage}
      style={styles.backgroundImg}
      resizeMode="cover"
    >
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.red}></View>
          <View style={styles.green}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: "100%",
    flex: 1,
    //flexDirection: "row",
    alignItems: "center",
    marginTop:
      Platform.OS === "android" ? `${StatusBar.currentHeight + 50}` : 70,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  footer: {
    width: "100%",
    alignItems: "flex-end",
  },
  red: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  green: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});
