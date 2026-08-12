import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { Activity, useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { FlatList } from "react-native";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function HomeScreen({ navigation }) {
  const [newPost, setNewsPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchNews() {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setNewsPost(data);
    } catch (error) {
      console.error("Error fetch news: ", error);
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.stateContainer}>
          <ActivityIndicator size={90} />
          <Text style={styles.stateText}>Loading</Text>
        </View>
      ) : error ? (
        <View style={styles.stateContainer}>
          <Text style={styles.stateText}>Error loading news!</Text>
        </View>
      ) : newPost.length === 0 ? (
        <View style={styles.stateContainer}>
          <Text style={styles.stateText}>No news found!</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.header}>Campus News</Text>

          <View>
            <FlatList
              data={newPost}
              renderItem={({ item }) => (
                <View>
                  <NewsCard
                    title={item.title}
                    body={item.body}
                    onPress={() => {
                      navigation.navigate("NewsDetails", item);
                    }}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  stateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stateText: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  header: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
