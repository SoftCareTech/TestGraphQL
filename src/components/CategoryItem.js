import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemData from "./ItemData"
export default function CategoryItem({ categoryData = [
    { id: "id1", date: '072', name: "name1", type: "type" },
    { id: "id2", date: '072', name: "name2", type: "type" },
    { id: "id3", date: '072', name: "name3", type: "type" }] }) {
    return (
        <View style={styles.container}>
            <View style={styles.dateBox}>
                <Text style={styles.date}>{categoryData[0].date}</Text>
            </View>

            <FlatList
                data={categoryData}
                keyExtractor={(e) => e.id}
                renderItem={({ item }) => <ItemData data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    date: {
        flex: -1,
        fontSize: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "green"
        , borderWidth: 1
        , textAlignVertical: 'center',

    },
    dateBox: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    }

});
