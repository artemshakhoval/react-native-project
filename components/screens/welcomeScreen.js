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
