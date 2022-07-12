
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Search({ value = "", onSearchChange }) {
    return (
        <View style={styles.container}>
            <TextInput value={value} style={styles.search} onChangeText={onSearchChange} placeholder={"Search"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        backgroundColor: 'whitesmoke',
    },
    search: {
        height: 50
        , outlineStyle: "none"
        , borderColor: "#bfbfbf"
        , borderWidth: 1,
        backgroundColor: '#F5F5F5',
        padding: 8
        , textAlign: "center"
    }
}); 
