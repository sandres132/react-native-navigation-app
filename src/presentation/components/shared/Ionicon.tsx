import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    size?: number;
    color?: string;
    name: string;
    padding?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    margin?: number;
    marginHorizontal?: number;
    marginVertical?: number;
}

export const Ionicon = ({
  name,
  size = 20,
  color = 'balck',
  margin = 0,
  marginHorizontal = 0,
  marginVertical = 0,
  padding = 0,
  paddingHorizontal = 0,
  paddingVertical = 0,
}:Props) => {
  return (
    <Icon
        name={ name }
        size={ size }
        color={ color }
        style={{
          padding: padding,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          margin: margin,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
        }}
    />
  )
}
