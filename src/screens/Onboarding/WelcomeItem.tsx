import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import colors from "../../config/colors";

const WelcomeItem = ({ item }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageCon}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "cover" }]}
        />
      </View>

      <View style={styles.textCon}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCon: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  textCon: {
    flex: 0.6,
    width: "100%",
    backgroundColor: colors.black,
    padding: 20,
  },
  title: {
    fontFamily: "PrimarySemiBold",
    fontWeight: "600",
    fontSize: 22,
    color: colors.secondary,
  },
  desc: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.secondary,
    marginTop: 5,
  },
});
