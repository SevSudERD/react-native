import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TabButtons from './TabButton'; 
import { TabButtonType } from './TabButton';
import TabsItem from './TabsItem';
import SliderItem from './SliderItem';
import { ImageSlider } from '@/data/SliderData';
import Slider from './Slider';


export enum CustomTab {
  Tab1,
  Tab2,
}

const TabScreen = (props: any) => {
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);
  
  const buttons: TabButtonType[] =[
    {title: 'Main'},
    {title: 'Home'},
  ];

  return (
    <>
    <TabButtons 
    buttons={buttons} 
    selectedTab={selectedTab}
    setSelectedTab={setSelectedTab} 
    />
    <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
      {selectedTab === CustomTab.Tab1 ? (
        <Slider itemList={ImageSlider}/>
      ) : (
        <TabsItem />
      )}
    </View>
    </>
  );
};

export default TabScreen;

const styles = StyleSheet.create({
  tabTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  }
});