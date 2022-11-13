import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIVanilla = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    });

    const [dataJob, setDataJob] = useState({
        name: '',
        job: '',
    });

    useEffect(() => {
        // fetch API dengan method GET
        // fetch('https://reqres.in/api/users/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json));
        // fetch API dengan method POST
    }, []);

    const getData = () => {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setDataUser(json.data);
            });
    };

    const postData = () => {
        const dataUser = {
            name: 'Rizky Wahyu Prasetiyo',
            job: 'Junior Web Developer',
        };

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataUser),
        })
            .then(response => response.json())
            .then(json => {
                console.log('post response: ', json);
                setDataJob(json);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Belajar Call API Dengan Vanilla Javascript
            </Text>
            <Button title="Get Data" onPress={getData} />
            <Text style={styles.hasilGetData}>Hasil Get Data</Text>
            <View style={styles.bungkusGetData}>
                <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
                <View>
                    <Text
                        style={
                            styles.nama
                        }>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                    <Text style={styles.email}>{dataUser.email}</Text>
                </View>
            </View>
            <View style={styles.garis} />
            <Button title="Post Data" onPress={postData} />
            <Text style={styles.hasilPostData}>Hasil Post Data</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
    },
    header: {
        marginTop: 24,
        fontWeight: '700',
        color: '#282828',
        fontSize: 24,
        marginBottom: 16,
    },
    bungkusGetData: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 16,
        borderRadius: 16,
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        marginRight: 16,
    },
    nama: {
        fontSize: 22,
        fontWeight: '600',
        color: '#282828',
    },
    email: {
        fontSize: 16,
        marginTop: 2,
        color: '#888',
    },
    hasilGetData: {
        marginTop: 16,
        fontSize: 16,
        color: '#282828',
    },
    garis: {
        height: 2,
        width: '100%',
        backgroundColor: '#282828',
        marginVertical: 24,
    },
    hasilPostData: {
        marginTop: 16,
        fontSize: 16,
        color: '#282828',
    },
});
