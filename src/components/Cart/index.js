import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import cart from '../../assets/image/cart.png';

const Cart = props => {
    return (
        <View style={styles.bungkus}>
            <Image source={cart} style={styles.cartIcon} />
            <Text style={styles.jumlahItem}>{props.jumlah}</Text>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    bungkus: {
        alignItems: 'center',
        width: 36,
    },
    cartIcon: {
        width: 36,
        height: 32,
        position: 'relative',
    },
    jumlahItem: {
        fontSize: 16,
        color: '#282828',
        backgroundColor: 'salmon',
        paddingHorizontal: 4,
        borderRadius: 8,
        position: 'absolute',
        right: 0,
        top: -6,
    },
});
