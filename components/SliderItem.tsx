import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ItemType } from "@/type/ItemType";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
  item: ItemType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");



const SliderItem = ({ item, index, scrollX }: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return{
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index+1) * width],
            [-width * 0.25, 0, width*0.25],
            Extrapolation.CLAMP
          ),
          
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index+1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        }
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Image
        source={{ uri: item.posterUrl }}
        style={{ width: 300, height: 500, borderRadius: 20 }}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <View style={{ alignItems: "flex-end" }}>
         
        </View>
        <View style={{ gap:10 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: width,
  },
  background: {
    position: "absolute",
    height: 500,
    width: 300,
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
  description: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
  icon: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    borderRadius: 30,
  }
});  