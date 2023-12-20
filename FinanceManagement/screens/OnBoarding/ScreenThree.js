import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from "react-native";

export default function ScreenThree({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../img/onboarding.jpg")} style={{width: '100%', height: '100%', opacity: 0.9}}>
                <View style={styles.content}>
                    <Text style={styles.heading}>
                        Welcome to Money Helper!
                    </Text>
                    <Text style={styles.text}>
                        Set up your budget,
                    </Text>
                    <Text style={styles.normal}>
                        it's super simple
                    </Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={()=> navigation.replace("signup") }>
                    <View style={styles.button}>
                        <Text style={styles.btnTxt}>Get Started</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
    heading: {
        fontSize: 28,
        color: '#ffffff'
    },
    content: {
        marginTop: 30,
        marginHorizontal: 50,
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        color: '#E93700'
    },
    normal: {
        fontSize: 18,
    },
    row: {
        position:'absolute',
        bottom: 10,
        marginHorizontal: 50,
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#ff944d",
        width: 320,
        padding: 20,
        borderRadius: 12,
    },
    btnTxt:{
        color:"#fff",
        textAlign:"center",
        fontSize:18
    }
});
