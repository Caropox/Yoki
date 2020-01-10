import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {homeStyle} from "../style/home";
import {fontsStyle} from "../style/fonts";

export default class ProductText extends React.Component {
  constructor() {
    super();
  }

  render() {

    if(this.props.data == null){
      return null;
    }
    return (
      <View
        >

        <Text style={{
          textAlign: 'center',
          paddingBottom: 10,
          fontSize: 25,
        }}>{this.props.data.product_name}</Text>
        <Text
        style={{
          textAlign: 'center',
          paddingBottom: 10,
          color: 'blue',
        }}>{this.props.data.link}</Text>
        <Text
        style={{
          textAlign: 'center',
          paddingBottom: 10,
        }}>{this.props.data.ingredients_text_fr}</Text>
        <Text
        style={{
          textAlign: 'center',
          color: 'red',
          paddingBottom: 10,
        }}> Nova groups {this.props.data.nova_groups}</Text>
        <Text
        style={{
          textAlign: 'center',
        }}>{this.props.data.generic_name_fr}</Text>
      </View>
    );
  }
}