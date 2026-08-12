import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DetailsScreen({ route }) {
  const { title, body, id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>News Details</Text>
      <View style={styles.views}>
        <Text style={styles.headings}>Title</Text>
        <Text>{title}</Text>
      </View>

      <View
        style={[styles.views, { flexDirection: "row", alignItems: "center" }]}
      >
        <Text style={styles.headings}>Post ID: </Text>
        <Text>{id}</Text>
      </View>

      <View>
        <Text>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
  views: {
    marginBottom: 20,
  },
  headings: {
    fontSize: 20,
  },
  header: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
