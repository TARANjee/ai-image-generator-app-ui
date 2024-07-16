import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function Categories() {

    return (
        <View style={styles.category}>
            <ScrollView horizontal style={styles.scrollContainer}>
                <View style={[styles.container, styles.Currentcontainer]}>
                    <Text style={[styles.categoryText, styles.currentCategory]}>Editor's choice</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.categoryText}>Top artworks</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.categoryText}>Recent artwork</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.categoryText}>Others</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        marginHorizontal: 5,
    },
    scrollContainer: {
        paddingVertical: 15
    },
    container: {
        paddingHorizontal: 18,
        fontSize: 18,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        paddingVertical: 15
    },
    Currentcontainer: {
        backgroundColor: '#fb8500',
        color: "#fff"
    },
    categoryText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    currentCategory: {
        color: "#fff",

    }
})