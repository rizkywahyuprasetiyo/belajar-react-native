import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Cart from '../../components/Cart';
import Card from '../../components/Card';

const Komunikasi = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Materi Konsep Komunikasi Antar Component
            </Text>
            <View style={styles.bungkusCart}>
                <Cart jumlah={totalProduct} />
            </View>
            <View style={styles.bungkusCard}>
                <Card onButtonPress={() => setTotalProduct(totalProduct + 1)} />
            </View>
        </SafeAreaView>
    );
};

export default Komunikasi;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingTop: 32,
    },
    bungkusCart: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    bungkusCard: {
        marginTop: 16,
    },
});
