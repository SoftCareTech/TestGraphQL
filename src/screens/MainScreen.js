
import { FlatList, View } from "react-native";
import Search from "../components/Search"
import Filters from "../components/Filters"
import CategoryItem from "../components/CategoryItem"
import { useState } from "react";
export default function MainScreen() {
    const data = [1, 4, 7]
    return <View>
        <Search onSearchChange={(text) => { console.log(text) }}
        />
        <Filters selectionChange={(list, sel) => console.log("Implement selection change")} />
        <FlatList
            data={data}
            keyExtractor={(w) => w}
            renderItem={(date) => <CategoryItem />}
        />
    </View>
}