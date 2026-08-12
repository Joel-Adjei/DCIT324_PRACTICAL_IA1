import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About</Text>

      <View style={styles.views}>
        <Text style={styles.headings}>DCIT324</Text>
        <Text>Mobile Application Development</Text>
      </View>

      <View style={styles.views}>
        <Text style={styles.headings}>Developed by</Text>
        <Text>Joel Adjei</Text>
      </View>

      <View style={styles.views}>
        <Text style={styles.headings}>Student ID</Text>
        <Text>22044650</Text>
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
