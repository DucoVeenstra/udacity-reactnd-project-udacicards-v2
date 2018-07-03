import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black } from '../utils/colors.js';

export default function TextButton ({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    width: 140,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  }
});