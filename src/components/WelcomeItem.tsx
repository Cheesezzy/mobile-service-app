import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import colors from "../config/colors";

const WelcomeItem = ({ item }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontFamily: "LatoRegular",
    fontWeight: "600",
    fontSize: 18,
    color: colors.primary,
  },
  desc: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    marginTop: 10,
    letterSpacing: 1,
    textAlign: "center",
  },
});
