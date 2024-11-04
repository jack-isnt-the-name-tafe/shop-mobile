import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Surface, Text, Switch } from 'react-native-paper';
import { useTheme } from '../components/ThemeContext';

export default function HelpScreen(props) {

  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Surface style={styles.container}>
        <Text variant="displaySmall" style={styles.title}>
          Help Screen
        </Text>
        <View style={styles.switchContainer}>
          <Text variant="titleSmall" style={styles.subtitle}>
            Current Theme: {isDarkTheme ? "Dark" : "Light"}
          </Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    margin: 20,
  },
  subtitle: {
    marginBottom: 16,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 30,
  },
  switchLabel: {
    fontSize: 16,
  },
});