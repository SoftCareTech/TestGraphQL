import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Filters({
    list = ["Java", "Kotlin", "C++", "JavaScript"],
    defaultSelection = [false, true, false, true],
    selectionChange = (list, sel) => console.log("Implement selection ") }) {


    if (defaultSelection.length !== list.length) console.error("Error selection must be set")
    const [selection, setSelection] = useState(defaultSelection)

    const itemPress = (item) => {
        var newSele = [...selection];
        const index = list.indexOf(item)
        newSele[index] = !selection[index]
        console.log("Press Sel", selection)
        if (selectionChange)
            selectionChange(list, newSele);
        setSelection(newSele)

        console.log("Press", newSele)
    }
    return (<View style={styles.container}>
        {list.map((e) => <Text key={e}
            onPress={() => itemPress(e)}
            style={selection[list.indexOf(e)] ?
                styles.itemSelected : styles.item}>{e}
        </Text>)}

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 16,
        alignItems: "center"
    },
    item: {
        flex: 1,
        padding: 8

        , borderColor: "#bfbfbf"
        , borderWidth: 1,
        textAlign: "center",
        textAlignVertical: 'center',
        marginHorizontal: 4
    },
    itemSelected: {

        flex: 1,
        padding: 8,
        borderColor: "blue"
        , borderWidth: 1
        , textAlign: "center"
        , textAlignVertical: 'center',
        marginHorizontal: 4
        , alignItems: 'center',
        alignContent: "center",
        justifyContent: 'center',
        alignItems: "center"


    }
});
/*
 <FlatList
            horizontal
            data={list}
            keyExtractor={(e) => e}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} /> */