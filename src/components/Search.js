
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        height: 50
        , outlinStyle: "none"
        , borderColor: "blue"
        , borderWidth: 1
        , padding: 8
    }
}); 
