import { StyleSheet, View, Text } from "react-native";

export default function LongButton({text}) {
	return (
		<View style={styles.button}>
		<Text style={styles.btnTxt}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#ff944d",
		width: 368,
		paddingVertical: 20,
		borderRadius: 12,
	},
	btnTxt:{
		color:"#fff",
		textAlign:"center",
		fontSize: 20,
		fontWeight: '600'
	}
});
