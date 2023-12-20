import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import LongButton from "../../components/LongButton";

const AddSpending = ({navigation}) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleAdding = (name, amount, description) => {
        fetch(`https://6581c49e3dfdd1b11c442cbd.mockapi.io/spendings`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({name: name, amount: amount, description: description})
        })
        .then(res => {
            console.log(res.status);
            console.log(res.headers);
            return res.json();
        })
        .then(
            (result) => {
                console.log(result);
                navigation.navigate('HomePage');
            },
            (error) => {
                console.log(error);
            }
        )
    };
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../../img/signup.jpg")} style={{width: '100%', height: '100%', opacity: 0.8}}>
        <View style={{margin: 14}}>
            <Text style={styles.title}>Spending</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
            />
            <Text style={styles.title}>Amount</Text>
            <TextInput style={styles.input} onChangeText={text => setAmount(text)} />

            <Text style={styles.title}>Description</Text>
            <TextInput style={styles.input} onChangeText={text => setDescription(text)} />
            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleAdding(name, amount, description)}>
                    <LongButton text="Add" />
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
        </View>
    );
};

export default AddSpending;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: "#ffffff"
    },

    title: {
        color: '#ff944d',
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        height: 50,
        width: '96%',
        borderWidth: 0.8,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: 16
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width - 40,
        marginTop: 0,
    },
});
