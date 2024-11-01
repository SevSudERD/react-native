import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

export type TabButtonType = {
  title: string;
}

type TabButtonsProps = {
  buttons: TabButtonType[],
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}

const TabButtons = ({buttons, selectedTab, setSelectedTab}: TabButtonsProps) => {
  const [dimensions, setDimensions] = useState({height: 20, width: 100})

  const buttonWidth = dimensions.width / buttons.length;

  const tabPositionX = useSharedValue(0);

  const onTabbarLayout = (e:LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width
    });
  };
  const handlePress = (index: number) => {
    setSelectedTab(index);
  }

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handlePress)(index);
    });
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}]
    }
  });


  return (

    <View 
    accessibilityRole='tabbar'
    style={{
      backgroundColor: '#1d70a3', 
      borderRadius: 20, 
      justifyContent: 'center',
      alignContent: 'center',
      marginHorizontal: 40,
      width: '80%',
      }}
      >
        <Animated.View style={[
          animatedStyle,{
          position: 'absolute', 
          backgroundColor:'#fff', 
          borderRadius: 15, 
          marginHorizontal: 10 , 
          height: dimensions.height -15,
          width: buttonWidth - 20,
          }]}
          />
      <View onLayout={onTabbarLayout} style={{flexDirection: 'row'}}>
        {buttons.map((button, index) => {
          const color = selectedTab === index ? '#1d70a3' : '#fff';
          return (
            <Pressable
              key={index}
              style={{
                flex: 1, paddingVertical: 20
              }}
              onPress={()=>onTabPress(index)}
              >
                <Text style={{color:color, alignSelf: 'center', fontWeight: '600', fontSize: 15}}>{button.title}</Text>
              </Pressable>
          );
        })}
      </View>
    </View>
  )
}

export default TabButtons

const styles = StyleSheet.create({})