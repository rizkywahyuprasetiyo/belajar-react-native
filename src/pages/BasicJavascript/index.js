import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const namaOrang = [
    'Rizky Wahyu Prasetiyo',
    'Syafaat Agung Prakoso',
    'Agus Pribadi',
    'Dani Firmansyah',
    'Ragil Afriza',
];

const BasicJavascript = () => {
    return (
        <View>
            <Text>Belajar Basic Javascript</Text>
            {namaOrang.map((nama, key) => (
                <Text>{nama}</Text>
            ))}
        </View>
    );
};

export default BasicJavascript;

const styles = StyleSheet.create({});
