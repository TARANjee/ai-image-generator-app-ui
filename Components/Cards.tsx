import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const datas = [
  {
    uid: 1,
    name: 'MikeMartin',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    image: 'https://media.istockphoto.com/id/1316356620/vector/pencil-rocket-isolated-on-white-background-online-education-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=q1wBlk1qoCIKfQKj9ctBDDk_dUHmPdgEqDYn-Q0-Oco=',
  },
  {
    uid: 2,
    name: 'Sarahsmith',
    text: 'dipiscing elit, sed do eiusmod tempor incididunt ',
    image: 'https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=612x612&w=0&k=20&c=6up_J8ekhYIbF3qiUEo9t28u8X-UrFNqwryyRhBl35w=',
  },
  {
    uid: 3,
    name: 'Taranjeets120',
    text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    image: 'https://media.istockphoto.com/id/1310475310/photo/woman-looking-at-her-smart-watch-for-a-pulse-trace.jpg?s=612x612&w=0&k=20&c=bL7LcVU9zQfQlN0MH97Bj6l5dFPuJk7p1ySxZ2Te6Gk=',
  },
  {
    uid: 4,
    name: 'Karanaujla',
    text: ' sit amet consecsed do eiusmod tempor incididunt ',
    image: 'https://storage.googleapis.com/wnr-ai/uploads/workspace/template/meta_image/9128/v896x512_v896x512_meta_image.png',
  },
]
export default function Cards() {

  return (
    <ScrollView style={styles.container}>
      {datas.map((data) => (
        <View style={styles.card} key={data.uid}>
          <Image
            source={{ uri: data.image }}
            style={styles.cardImage}
          />
          <View style={styles.imageContent}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={{ uri: 'https://cdn1.iconfinder.com/data/icons/business-management-98/32/kaArtboard_15-1024.png' }}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={{ uri: 'https://static.thenounproject.com/png/1538575-200.png' }}
                style={styles.iconImage}
              />
            </TouchableOpacity>

          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>@{data.name}</Text>
              <Text numberOfLines={1} style={styles.desc} >{data.text}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Try</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  imageContent: {

    position: 'absolute',
    top: 10,
    flexDirection: 'column',
    right: 10,
  },
  iconContainer: {
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding:2
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    height: 225,
    borderRadius: 30,
  },
  cardImage: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 150,

  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,

  },
  bodyContainer: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#000'
  },
  desc: {
    fontWeight: 'bold',
    color: '#000'
  },
  button: {

    width: 50,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: 'bold',
    borderRadius: 10
  },
  buttonText: {
    color: '#fff'
  },
  textContainer: {
    flex: 3,
    marginHorizontal: 15
  },
  buttonContainer: {
    flex: 1
  }
})