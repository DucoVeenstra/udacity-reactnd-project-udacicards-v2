import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black } from '../utils/colors.js';

export default function TextButton ({ children, onPress, color }) {
  test = () => {
    if (color.includes('#fff')) {
      return [{backgroundColor: color, borderWidth: 1, borderColor: '#000'}, styles.container]
    } else {
      return [{backgroundColor: color}, styles.container]
    } 
  }

  return (
    <TouchableOpacity onPress={onPress} style={this.test()}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    height: 40,
    width: 240,   
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    height: '100%',
    padding: 7
  }
});