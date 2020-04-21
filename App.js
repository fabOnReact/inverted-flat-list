/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, FlatList, Text, RefreshControl } from 'react-native';
import { useDimensions } from '@react-native-community/hooks'
import { POSTS } from './posts'; 

function Item({ data }) {
  return (
    <>
      <View style={styles.item}>
        <Text style={styles.title}>{data.id} - {data.title}</Text>
      </View>
    </>
  );
}

const App: () => React$Node = () => {
  const [refreshing, setRefreshing] = useState(false);  
  const screen = useDimensions().screen;
  const height = screen.height - 180;
  const onRefresh = () => {
    setRefreshing(true)
  }

  return (
    <FlatList
      data={POSTS}
      renderItem={({ item }) => <Item data={item} />}
      keyExtractor={item => item.id}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={height} />}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
