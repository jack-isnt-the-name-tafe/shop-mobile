import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Surface, Text, Switch } from 'react-native-paper';
import { fetchAllCategories } from '../utils/api';

export default function HomeScreen(props) {

    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            const fetchData = async () => {
                const fetchCategories = await fetchAllCategories();
                setCategories(fetchCategories);
                console.log(fetchCategories);
            };
        },
        []);

  return (
    <Surface style={styles.container} mode="flat" elevation={0}>
      <Text variant="displaySmall">Home Screen</Text>
      {
        categories.map((category) => (
            <Text key={category.id}>{category.name}</Text>
        ))
      }
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