/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 80,
                backgroundColor: '#0abde3',
            }}>
            <View>
                <Text>Rizky</Text>
                <Umur />
            </View>
            <View style={{height: 200}}>
                <Gambar />
            </View>
            <View style={{marginHorizontal: 20}}>
                <TextInput style={{borderWidth: 1, marginTop: 16}} />
            </View>
            <View>
                <Baru />
                <Masjid />
            </View>
        </View>
    );
};

const Umur = () => {
    return <Text>10 Tahun</Text>;
};

const Gambar = () => {
    return (
        <Image
            source={{
                uri: 'https://images.unsplash.com/photo-1597734187998-e1931acfe2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            }}
            style={{width: '100%', height: '100%'}}
        />
    );
};

class Baru extends Component {
    render() {
        return <Text>Ini adalah components dari class</Text>;
    }
}

class Masjid extends Component {
    render() {
        return (
            <View>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1578895151671-7d2e2e89dcf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
                    }}
                    style={{width: '100%', height: 200}}
                />
                <Text>Ini adalah masjid terbesar di Kalimantan Barat</Text>
            </View>
        );
    }
}

export default App;
