import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView ,
} from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <SafeAreaView >
            <View style={styles.viewOne}>
                <Image
                    source={require("../../img/avatar.png")}
                    style={styles.image}
                />
                <Text style={styles.heading2}>Giang</Text>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Personal Details</Text>
                <View style={styles.divider}></View>
                <View style={styles.cardContent}>
                <Text style={styles.text}>Username: Giang</Text>
                <Text style={styles.text}>Email: tragiang0302@gmail.com</Text>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => alert("Edit button pressed")}
                >
                    <Text style={styles.editButtonText}>Edit Personal Details</Text>
                </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "center",
        backgroundColor: "#fff",
    },
    cardContainer: {
        width: Dimensions.get("screen").width - 20,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 3,
        padding: 10,
        margin: 10,
        borderColor: "#ff944d",
        borderWidth: 1,
    },
    cardContent: {
        marginHorizontal: 20,
    },
    divider: {
        height: 1,
        backgroundColor: "#ff944d",
        marginVertical: 10,
    },
    viewOne: {
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        width: Dimensions.get("screen").width,
        marginVertical: 20,
    },
    heading: {
        marginTop: 10,
        fontSize: 24,
        width: "80%",
        marginHorizontal: 20,
    },
    heading2: {
        width: "100%",
        textAlign: "center",
        fontWeight:'bold',
        fontSize: 22,
    },
    text: {
        marginVertical: 10,
        fontSize: 16,
    },
    editButton: {
        backgroundColor: "#fff",
        padding: 10,
        width: 200,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 6,
        borderColor: "#ff944d",
        borderWidth: 1,
    },
    editButtonText: {
        color: "#ff944d",
        fontSize: 16,
    },
    upgradeButton: {
        backgroundColor: "#fff",
        padding: 10,
        width: 150,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 6,
        borderColor: "#ff944d",
        borderWidth: 1,
    },
    upgradeButtonText: {
        color: "#ff944d",
        fontSize: 12,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: Dimensions.get("screen").width,
        marginVertical: 20,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "cover",
        borderRadius: 10,
    },
});
