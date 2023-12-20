import { StyleSheet, Text, View } from "react-native";

export default function DisplayRow({name, amount}) {
    return (
        <View style={styles.row}>
        <View style={styles.col}>
            <View>
            <Text style={styles.text}>{name}</Text>
            </View>
        </View>
        <View>
            <Text style={styles.text}>{amount}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        marginVertical:10
    },
    col: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize:16,
        color: "#000000",
    },
});
