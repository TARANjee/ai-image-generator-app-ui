import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import Categories from './Components/Categories'
import Cards from './Components/Cards'

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Discover</Text>
      <Categories />
      <Cards />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',

  },
  headingText: {
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 10,
    marginVertical: 10,
    color: '#000',
  }
})