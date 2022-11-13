import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = props => {
    return (
        <View style={styles.bungkusCard}>
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                }}
                style={styles.thumbnail}
            />
            <Text style={styles.namaProduct}>
                Camera Jadul Sony Experia Alpha 2003
            </Text>
            <Text style={styles.hargaProduct}>Rp. 1.200.000.</Text>
            <Text style={styles.lokasiProduct}>
                Putussibau, Kalimantan Barat
            </Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={styles.tombolBeli}>
                    <Text style={styles.textTombol}>Beli Sekarang</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    bungkusCard: {
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    thumbnail: {
        width: '100%',
        height: 200,
    },
    namaProduct: {
        fontSize: 20,
        marginTop: 8,
        color: '#282828',
    },
    hargaProduct: {
        fontWeight: '700',
        color: '#282828',
        fontSize: 24,
        marginTop: 8,
    },
    lokasiProduct: {
        fontWeight: '300',
        fontSize: 16,
        marginTop: 8,
        color: '#282828',
    },
    tombolBeli: {
        backgroundColor: 'green',
        paddingVertical: 16,
        borderRadius: 16,
        marginTop: 24,
    },
    textTombol: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#f2f2f2',
    },
});
