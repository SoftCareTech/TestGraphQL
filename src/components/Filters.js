import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Filters({
    list = ["Java", "Kotlin", "C++", "JavaScript"],
    defaultSelection = [false, true, false, true],
    selectionChange = (list, sel) => console.log("Implement selection ") }) {
    if (defaultSelection.length !== list.length) console.error("Error selection must be set")
    const [selection, setSelection] = useState(defaultSelection)
    const itemPress = (item) => {
        let newSele = selection; const index = list.indexOf(item)
        newSele[index] = !selection[index]
        if (selectionChange) selectionChange(list, newSele);
        setSelection(newSele)
    }
    return (
        <View style={styles.container}>
            {list.map((e) => (<Text key={e} onPress={() => itemPress(e)} style={styles.item}>{e}</Text>))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    item: {
        flex: 1
        , marginHorizontal: 4
    }
});
/*
 <FlatList
            horizontal
            data={list}
            keyExtractor={(e) => e}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} /> */