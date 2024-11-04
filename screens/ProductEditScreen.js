import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Surface, Text, Switch } from 'react-native-paper';

export default function ProductEditScreen(props) {
  return (
    <Surface style={styles.container}>
      <Text style={styles.text}>Product Edit Screen</Text>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});