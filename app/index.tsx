import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@/components/Slider'
import { ImageSlider } from '@/data/SliderData'
import TabScreen from '@/components/TabScreen'

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabScreen />
    </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({
     container: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
     }
})