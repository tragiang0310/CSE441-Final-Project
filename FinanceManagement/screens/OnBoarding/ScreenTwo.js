import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from "react-native";

export default function ScreenTwo() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../img/onboarding.jpg")} style={{width: '100%', height: '100%', opacity: 0.9}}>
                    <View style={styles.content}>
                        <Text style={styles.heading}>
                            Money Helper
                        </Text>
                        <Text style={styles.text}>
                            Take control of 
                        </Text>
                        <Text style={styles.normal}>
                            your finances
                        </Text>
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
    }
});
