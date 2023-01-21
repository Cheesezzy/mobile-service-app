import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { categories } from "../../provider/pages/pages";
import DropDownPicker from "react-native-dropdown-picker";

const { width, height } = Dimensions.get("window");

interface PageProps {
  page: any;
  index: number;
  translateX: Animated.SharedValue<number>;
  setName: any;
  setDesc: any;
  category: any;
  setCategory: any;
}

const Page = ({
  page,
  translateX,
  index,
  setName,
  setDesc,
  category,
  setCategory,
}: PageProps) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<any>([...categories]);

  const rImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [
        {
          rotate: `${progress * Math.PI}rad`,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={page?.image}
        style={[styles.image, rImageStyle]}
        resizeMode="contain"
      />
      {page?.title && <Text style={styles.title}>{page?.title}</Text>}
      {page?.desc && <Text style={styles.desc}>{page?.desc}</Text>}
      {page?.welcomeText && (
        <Text
          style={{
            fontFamily: "LatoRegular",
            fontSize: 13,
            color: colors.primary,
            paddingHorizontal: 10,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          Welcome to the Rete community! We're thrilled to have you join us. We
          can't wait to see what you have to offer. Let's make this a fun and
          engaging experience for everyone.
        </Text>
      )}
      {page?.inputName && (
        <TextInput
          onChangeText={(newName) => setName(newName)}
          style={styles.inputBox}
          placeholder="Choose something descriptive"
        />
      )}
      {page?.inputDesc && (
        <TextInput
          onChangeText={(newDesc) => setDesc(newDesc)}
          style={styles.inputBox}
          placeholder="Choose something descriptive"
        />
      )}

      {page?.inputCategory && (
        <DropDownPicker
          style={{
            width: "80%",
            alignSelf: "center",
            marginTop: 20,
            borderColor: "lightgrey",
          }}
          listItemLabelStyle={{
            fontFamily: "Lato",
            fontSize: 12,
          }}
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
        />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 250,
    width: "100%",
  },
  title: {
    fontFamily: "LatoRegular",
    fontWeight: "600",
    fontSize: 18,
    color: colors.primary,
  },
  desc: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    marginVertical: 10,
    letterSpacing: 1,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  inputBox: {
    height: 45,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 50,
    fontFamily: "LatoRegular",
  },
});
