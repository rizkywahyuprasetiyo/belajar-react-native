import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text style={styles.counter}>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number + 1)} />
        </View>
    );
};

const StateDinamis = () => {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>
                    Materi Component Dinamis dengan State Dinamis
                </Text>
                <Counter />
                <Counter />
            </SafeAreaView>
        </View>
    );
};

export default StateDinamis;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 32,
    },
    counter: {
        fontSize: 48,
        textAlign: 'center',
    },
});
