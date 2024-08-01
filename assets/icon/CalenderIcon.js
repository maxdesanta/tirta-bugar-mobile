import React from 'react'
import { View, Image } from 'react-native'

export default function CalenderIcon() {
  return (
    <View>
        <Image style={{width: 14, height: 16}} source={require("../calendar-icon.png")} />      
    </View>
  )
}
