import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const Story = props => {
    return (
        <View style={styles.storyItems}>
            <Image
                source={{
                    uri: props.gambar,
                }}
                style={styles.gambar}
            />
            <Text style={styles.text}>{props.judul}</Text>
        </View>
    );
};

const PropsDinamis = () => {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <Text>Materi Component Dinamis Dengan Props </Text>
                <ScrollView horizontal>
                    <View style={styles.bungkusStory}>
                        <Story
                            judul="Quran"
                            gambar="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        />
                        <Story
                            judul="Masjid"
                            gambar="https://images.unsplash.com/photo-1578895151671-7d2e2e89dcf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                        />
                        <Story
                            judul="Kampus"
                            gambar="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80"
                        />
                        <Story
                            judul="Faidah Ilmu"
                            gambar="https://images.unsplash.com/photo-1517988368819-88f4eacfef44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        />
                        <Story
                            judul="Liburan"
                            gambar="https://images.unsplash.com/photo-1517988368819-88f4eacfef44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default PropsDinamis;

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingHorizontal: 22,
    },
    gambar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    text: {
        textAlign: 'center',
        marginTop: 8,
        maxWidth: 80,
    },
    bungkusStory: {
        marginTop: 16,
        flexDirection: 'row',
    },
    storyItems: {
        marginRight: 16,
    },
});
