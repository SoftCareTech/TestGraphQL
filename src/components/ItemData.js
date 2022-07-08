
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
        margin: 6,
        flexDirection: 'row',
        backgroundColor: "red"
    },
    box1: {
        flex: 1
    },
    box2: {
        flexDirection: "row",
        justifyContent: 'space-between',
        flex: 2
    }
    , text: {
        fontSize: 20
    }
});
