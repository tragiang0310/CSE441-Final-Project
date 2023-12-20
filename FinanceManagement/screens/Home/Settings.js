import { Text, View, StyleSheet } from "react-native";
export default function Settings(){
    return(
        <View style={styles.container} >
            <Text style={styles.heading}>
                This function is developing. Thank you!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "center",
        backgroundColor: "#fff",
    },
    heading: {
        marginTop: 10,
        fontSize: 24,
        width: "80%",
        marginHorizontal: 20,
    },
});