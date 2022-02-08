import { SafeAreaView, View, ImageBackground, StyleSheet } from "react-native";
import bgImg from "../../assets/chair.jpg";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.buttonBox}>
        <View style={styles.red}></View>
        <View style={styles.green}></View>
      </View>

      <ImageBackground
        style={styles.backgroundImg}
        source={bgImg}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#000",
  },
  buttonBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  red: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
  },
  green: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
  },
});
