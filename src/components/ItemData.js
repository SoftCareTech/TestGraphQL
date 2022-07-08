
import { StyleSheet, Text, View } from 'react-native';

export default function ItemData({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.text}>{data.id}</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>{data.name}</Text>
                <Text style={styles.text}>{data.type}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        flexDirection: 'row',
    },
    box1: {
        flex: -1,
        backgroundColor: "#bfbfbf"
        , marginRight: 8,
        padding: 8


    },
    box2: {
        padding: 8,
        backgroundColor: "#F5F5F5",
        flexDirection: "row",
        justifyContent: 'space-between',
        flex: 2
    }
    , text: {
        fontSize: 20
    }
});
