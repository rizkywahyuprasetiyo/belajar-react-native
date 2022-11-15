import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import axios from 'axios';

const ItemMahasiswa = ({nama, email, nim, pilih, hapus}) => {
    return (
        <TouchableOpacity onPress={pilih}>
            <View style={styles.bungkusMahasiswa}>
                <Image
                    source={{
                        uri: `http://adorableavatars.com/avatars/285/${email}.png`,
                    }}
                    style={styles.avatar}
                />
                <View style={styles.bungkusText}>
                    <Text style={styles.namaLengkap}>{nama}</Text>
                    <Text style={styles.email}>{email}</Text>
                    <Text style={styles.nim}>{nim}</Text>
                </View>
                <TouchableOpacity style={styles.tombolHapus} onPress={hapus}>
                    <Text style={styles.textHapus}>x</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const LocalAPI = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nim, setNIM] = useState('');
    const [dataMahasiswa, setDataMahasiswa] = useState([]);
    const [tombol, setTombol] = useState('Simpan');
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const submit = tombol => {
        const data = {
            nama,
            email,
            nim,
        };

        if (tombol === 'Simpan') {
            axios
                .post('http://10.0.2.2:3000/mahasiswa', data)
                .then(respon => {
                    console.log('respon request: ', respon);
                    setNama('');
                    setEmail('');
                    setNIM('');
                    getData();
                })
                .catch(err => console.log('error: ', err));
        } else {
            axios
                .put(`http://10.0.2.2:3000/mahasiswa/${selectedUser.id}`, data)
                .then(respon => {
                    console.log('respon put: ', respon);
                    setNama('');
                    setEmail('');
                    setNIM('');
                    getData();
                    setTombol('Simpan');
                })
                .catch(err => console.log('error: ', err));
        }
    };

    const getData = () => {
        axios
            .get('http://10.0.2.2:3000/mahasiswa')
            .then(res => {
                console.log('hasil respon: ', res);
                setDataMahasiswa(res.data);
            })
            .catch(err => console.log('error: ', err));
    };

    const selectItem = item => {
        console.log('selected item: ', item);
        setSelectedUser(item);
        setNama(item.nama);
        setEmail(item.email);
        setNIM(item.nim);
        setTombol('Update');
    };

    const hapusItem = item => {
        console.log(item);
        axios
            .delete(`http://10.0.2.2:3000/mahasiswa/${item.id}`)
            .then(respon => {
                console.log('respon hapus: ', respon);
                getData();
            })
            .catch(err => console.log('error: ', err));
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Belajar CRUD Dari Local API</Text>
                <Text style={styles.deskripsiForm}>
                    Ini merupakan form tambah data mahasiswa, silahkan isi.
                </Text>
                <View style={styles.bungkusForm}>
                    <Text style={styles.labelForm}>Nama Lengkap</Text>
                    <TextInput
                        placeholder="Rizky Wahyu Prasetiyo"
                        style={styles.form}
                        value={nama}
                        onChangeText={value => setNama(value)}
                    />
                    <Text style={styles.labelForm}>Email</Text>
                    <TextInput
                        placeholder="rizky.prasetiyo@unmuhpnk.ac.id"
                        style={styles.form}
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                    <Text style={styles.labelForm}>NIM</Text>
                    <TextInput
                        placeholder="171220372"
                        style={styles.form}
                        value={nim}
                        onChangeText={value => setNIM(value)}
                    />
                </View>
                <Button title={tombol} onPress={() => submit(tombol)} />
                <View style={styles.bungkusData}>
                    <Text style={styles.headerData}>Data Mahasiswa</Text>
                    {dataMahasiswa.map(mahasiswa => {
                        return (
                            <ItemMahasiswa
                                key={mahasiswa.id}
                                nama={mahasiswa.nama}
                                email={mahasiswa.email}
                                nim={mahasiswa.nim}
                                pilih={() => selectItem(mahasiswa)}
                                hapus={() =>
                                    Alert.alert(
                                        'Peringatan!',
                                        `Apakah Anda yakin ingin menghapus data ${mahasiswa.nama}?`,
                                        [
                                            {text: 'Tidak'},
                                            {
                                                text: 'Ya',
                                                onPress: () =>
                                                    hapusItem(mahasiswa),
                                            },
                                        ],
                                    )
                                }
                            />
                        );
                    })}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default LocalAPI;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
    },
    header: {
        marginTop: 24,
        fontSize: 24,
        fontWeight: '700',
        color: '#282828',
    },
    deskripsiForm: {
        fontSize: 16,
        marginTop: 8,
        color: '#888',
    },
    bungkusForm: {
        marginTop: 16,
        marginBottom: 24,
    },
    labelForm: {
        marginBottom: 8,
        fontSize: 16,
    },
    form: {
        borderWidth: 1.5,
        borderColor: 'green',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    bungkusData: {
        marginTop: 24,
    },
    headerData: {
        fontSize: 18,
        color: '#282828',
        fontWeight: '600',
        marginBottom: 16,
    },
    bungkusMahasiswa: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#f2f2f2',
        padding: 16,
        borderRadius: 16,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
        marginRight: 16,
    },
    namaLengkap: {
        fontSize: 18,
        fontWeight: '600',
        color: 'green',
    },
    email: {
        fontSize: 14,
    },
    bungkusText: {
        flex: 1,
    },
    tombolHapus: {
        backgroundColor: 'salmon',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
    },
});
