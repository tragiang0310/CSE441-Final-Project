import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import DisplayRow from "../../components/DisplayRow";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomePage({ navigation}) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [earning, setEarning] = useState('')
    const [spending, setSpending] = useState('')
    useFocusEffect(
        React.useCallback(() => {
            fetch('https://6581c49e3dfdd1b11c442cbd.mockapi.io/earnings')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setEarning(result)
            })
            .catch((error) => {
                console.log(error);
            })
            fetch('https://6581c49e3dfdd1b11c442cbd.mockapi.io/spendings')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setSpending(result)
            })
            .catch((error) => {
                console.log(error);
            })
        }, [navigation])
    );
    
    const ItemEarning = ({name, amount}) => (
        <DisplayRow
            name={name}
            amount={'+' + amount}
        />
    );
    const ItemSpending = ({name, amount}) => (
        <DisplayRow
            name={name}
            amount={'-' + amount}
        />
    );

    const renderItemEarning = ({item}) => (
        <ItemEarning 
        name={item.name} 
        amount={item.amount}
        />
    );

    const renderItemSpending = ({item}) => (
        <ItemSpending 
        name={item.name} 
        amount={item.amount}
        />
);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={[styles.homeDiv, styles.homeSummary]}>
                    <Text style={styles.summHeading}>Welcome to Money Manager!</Text>
                    <Text style={styles.summText}>Total Spent</Text>
                </View>

                <View style={[styles.homeDiv, styles.homeSpending]}>
                    <View style={styles.row}>
                        <Text style={styles.rowHeading}>Recent Spending</Text>
                        <TouchableOpacity>
                            <Text style={styles.summText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    {spending && (
                        <FlatList
                            data={spending}
                            renderItem={renderItemSpending}
                        />
                        )}
                    </View>
                </View>

                <View style={[styles.homeDiv, styles.homeSpending]}>
                    <View style={styles.row}>
                        <Text style={styles.rowHeading}>Recent Income</Text>
                        <TouchableOpacity>
                        <Text style={styles.summText}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                    {earning && (
                        <FlatList
                            data={earning}
                            renderItem={renderItemEarning}
                        />
                        )}
                    
                    </View>
                </View>
            </ScrollView>
            {/* floating button */}
            <View style={[styles.footer]}>
                <View style={styles.bottomView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                    >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.bottomView}>
                        <View style={{ marginVertical: 20 }}>
                            <View style={styles.modalRow}>
                            <Text style={styles.modalText}>Spending</Text>
                            <TouchableOpacity
                                style={[styles.floatingBtn, styles.spendingBtn]}
                                onPress={() => {
                                    setModalVisible(false);
                                    navigation.navigate("AddSpending");
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="cash-minus"
                                    size={20}
                                    color="white"
                                />
                            </TouchableOpacity>
                            </View>
                            <View style={styles.modalRow}>
                            <Text style={styles.modalText}>Earning</Text>
                            <TouchableOpacity
                                style={[styles.floatingBtn, styles.earningBtn]}
                                onPress={() => {
                                setModalVisible(false);
                                navigation.navigate("AddEarning");
                                }}
                            >
                                <MaterialCommunityIcons
                                name="cash-plus"
                                size={20}
                                color="white"
                                />
                            </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </TouchableWithoutFeedback>
                    </Modal>
                </View>
                {!modalVisible && (
                    <TouchableOpacity
                    style={styles.floatingBtn}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <AntDesign name="plus" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>
            {/* end of floating button */}
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
    text: {
        margin: 20,
        fontSize: 12,
    },
    button: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: Dimensions.get("screen").width,
    },
    homeDiv: {
        margin: 15,
    },
    summHeading: {
        fontSize: 26,
        color: "#ff944d",
    },
    summText: {
        fontSize: 16,
        color: "#000000",
    },
    homeSpending: {
        borderColor: "#ff944d",
        borderWidth: 1,
        width: Dimensions.get("screen").width - 30,
        padding: 10,
        borderRadius: 8,
    },
    homeEarnings: {
        borderColor: "#ff944d",
        borderWidth: 1,
        width: Dimensions.get("screen").width - 30,
        padding: 10,
        borderRadius: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
    },
    rowHeading: {
        fontSize: 20,
        color: "#ff944d",
    },
    footer: {
        flex: 0,
        justifyContent: "flex-end",
        marginBottom: 10,
        height: 10,
        alignContent: "flex-end",
        alignItems: "flex-end",
        marginHorizontal: 10,
        width: Dimensions.get("screen").width - 30,
    },
    floatingBtn: {
        backgroundColor: "#ff944d",
        padding: 10,
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    bottomView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginVertical: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalRow: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    modalText: {
        color: "#fff",
        fontSize: 14,
        marginHorizontal: 10,
    },
    spendingBtn: {
        width: 40,
        height: 40,
    },
    earningBtn: {
        width: 60,
        height: 60,
    },
});
