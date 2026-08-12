import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NewsCard({ title, body, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text numberOfLines={2}>{body}</Text>

      <Button onPress={onPress} title="Read More" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
