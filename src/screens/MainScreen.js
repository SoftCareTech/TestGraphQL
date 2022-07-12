
import { useEffect } from "react";
import { FlatList, ScrollView, View, Text } from "react-native";
import Search from "../components/Search"
import Filters from "../components/Filters"
import CategoryItem from "../components/CategoryItem"
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useQuery, useLazyQuery, gql, NetworkStatus } from '@apollo/client';
import { LOCATION, client, PERSONS } from "../graphql/client";
export default function MainScreen({ open }) {
    //  const { loading, error, data } = useQuery(LOCATION);
    const listTypes = ["Java", "Kotlin", "C++", "JavaScript"]

    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState(listTypes)


    console.log("newSele", selected, "Search", search)
    /*
    const { loading, error, data, refetch, networkStatus } = useQuery(
        PERSONS, {
        variables: { "types": selected, search: search },
        notifyOnNetworkStatusChange: true,
    });

*/
    const [refetch, { loading, error, data, networkStatus }] = useLazyQuery(
        PERSONS, {
        variables: { "types": selected, search: search },
        notifyOnNetworkStatusChange: true,
    });


    useEffect(() => {
        refetch()
    }, [search, selected])


    if (error) return <><Text>'Error...' {error.message}</Text> </>
    if (data) {//console.log(data.personsForHome)
    }
    else {
        console.log("NO data")
    }
    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }
    if (data) if (data.personsForHome) console.log(data.personsForHome.length)
    const dataMap = data ? data.personsForHome ? groupBy(data.personsForHome,
        d => d.date) : new Map() : new Map()

    const dataGroupList = Array.from(dataMap.values())
    const dataGroupKeys = Array.from(dataMap.keys())



    return <View style={styles.container}>
        <Search value={search} onSearchChange={(text) => {
            setSearch(text)
        }}
        />

        <Filters list={listTypes}
            defaultSelection={[true, true, true, true]}
            selectionChange={(selected) => {
                setSelected(selected)
            }
            } />
        {networkStatus === NetworkStatus.refetch ? <Text>Refetching! </Text> : null}

        {loading ?
            <Text>Loading</Text> :
            <ScrollView>
                <FlatList
                    scrollEnabled
                    data={dataGroupList}
                    listKey={dataGroupList}

                    renderItem={({ item }) => <CategoryItem categoryData={item} />}
                />
            </ScrollView>
        }
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },

});

/*
       const dataGroup = data ? data.personsForHome ? data.personsForHome.reduce(function (r, a) {
           r[a.date] = r[a.date] || [];
           r[a.date].push(a);
           return r;
       }, Object.create(null)) : [] : []
   */

