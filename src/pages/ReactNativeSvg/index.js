import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Kosong from '../../assets/image/kosong.svg';

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Kosong width={180} height={180} style={styles.ilustrasi} />
            <Text style={styles.text}>Belum Ada Isi Nih...</Text>
            <Text style={styles.desc}>
                Kamu belum mengisi sesuatu, isi sekarang dan rasakan bedanya...
            </Text>
            <TouchableOpacity style={styles.tombol}>
                <Text style={styles.textTombol}>Kembali ke Beranda</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingTop: 32,
        alignItems: 'center',
    },
    ilustrasi: {
        marginTop: 65,
    },
    text: {
        color: '#282828',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 32,
        fontWeight: '700',
    },
    desc: {
        textAlign: 'center',
        fontSize: 18,
        color: '#999',
        marginTop: 16,
    },
    tombol: {
        backgroundColor: 'blue',
        paddingHorizontal: 32,
        paddingVertical: 16,
        marginTop: 32,
        borderRadius: 16,
    },
    textTombol: {
        color: '#f2f2f2',
        fontSize: 18,
    },
});
