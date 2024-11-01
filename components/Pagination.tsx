import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ItemType } from '@/type/ItemType'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
     items: ItemType[];
     paginationIndex: number;
     scrollX: SharedValue<number>;
}

const {width} = Dimensions.get('window');

const Pagination = ({items, paginationIndex, scrollX}:Props) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
       
          const pgAnimationStyle = useAnimatedStyle(() => {
               const dotWidth = interpolate(
                    scrollX.value,
                    [(index - 1) * width, index * width, (index+1) * width],
                    [8, 20, 8],
                    Extrapolation.CLAMP
               );
               return {
                    width: dotWidth,
               };
          });
        return (
          <Animated.View key={index}
           style={[
               styles.text, 
               {backgroundColor: paginationIndex === index ? '#222' : '#aaa'}
      ]} />
        );
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    backgroundColor:'#aaa',
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
})