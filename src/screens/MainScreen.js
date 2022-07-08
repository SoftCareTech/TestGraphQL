
import { FlatList, ScrollView, View } from "react-native";
import Search from "../components/Search"
import Filters from "../components/Filters"
import CategoryItem from "../components/CategoryItem"
import { useState } from "react";
import { StyleSheet } from "react-native";
export default function MainScreen() {
    const data = [1, 4, 7]
    const [search, setSearch] = useState("")
    return <View style={styles.container}>
        <Search value={search} onSearchChange={(text) => {
            setSearch(text)
        }}
        />

        <Filters selectionChange={(list, sel) => console.log("Implement selection change")} />
        <ScrollView>
            <FlatList
                scrollEnabled
                data={data}
                keyExtractor={(w) => w}
                renderItem={(date) => <CategoryItem />}
            />
        </ScrollView>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },

});
