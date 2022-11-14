import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIAxios = () => {
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
        axios
            .get('https://reqres.in/api/users/3')
            .then(result => {
                console.log('result: ', result);
                setDataUser(result.data.data);
            })
            .catch(err => console.log('err: ', err));
    };

    const postData = () => {
        const dataUser = {
            name: 'Rizky Wahyu Prasetiyo',
            job: 'Junior Web Developer',
        };

        axios
            .post('https://reqres.in/api/users', dataUser)
            .then(hasil => {
                console.log('hasil post: ', hasil);
                setDataJob(hasil.data);
            })
            .catch(err => console.log('data error: ', err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Belajar Call API Dengan Vanilla Javascript
            </Text>
            <Button title="Get Data" onPress={getData} />
            <Text style={styles.hasilGetData}>Hasil Get Data</Text>
            <View style={styles.bungkusGetData}>
                {dataUser.avatar.length > 0 && (
                    <Image
                        source={{uri: dataUser.avatar}}
                        style={styles.avatar}
                    />
                )}
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

export default CallAPIAxios;

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
