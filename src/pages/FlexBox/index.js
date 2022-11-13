/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import avatar from '../../assets/image/avatar.jpeg';

// class index extends Component {
//     constructor(props) {
//         super(props);
//         console.log('ini adalah bagian dari constructor');
//         this.state = {
//             subscriber: 200,
//         };
//     }

//     componentDidMount() {
//         console.log('componen did mount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 500,
//             });
//         }, 5000);
//     }

//     componentDidUpdate() {
//         console.log('component did update');
//     }

//     componentWillUnmount() {
//         console.log('componen will unmount');
//     }

//     render() {
//         console.log('ini adalah bagian dari render');
//         return (
//             <View>
//                 <SafeAreaView
//                     style={{
//                         paddingHorizontal: 22,
//                         marginTop: 32,
//                     }}>
//                     <View style={{alignItems: 'center'}}>
//                         <Image
//                             source={avatar}
//                             style={{
//                                 width: 80,
//                                 height: 80,
//                                 borderRadius: 50,
//                                 marginBottom: 16,
//                             }}
//                         />
//                         <Text
//                             style={{
//                                 fontSize: 28,
//                                 fontWeight: '700',
//                                 color: '#282828',
//                                 marginBottom: 8,
//                             }}>
//                             Rizky Wahyu Prasetiyo
//                         </Text>
//                         <Text style={{fontSize: 16}}>
//                             {this.state.subscriber} Subscriber - 1 Video
//                         </Text>
//                     </View>
//                 </SafeAreaView>
//             </View>
//         );
//     }
// }

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(500);
    useEffect(() => {
        console.log('did mount');
        setTimeout(() => {
            setSubscriber(1000);
        }, 8000);
        return () => {
            console.log('did update');
        };
    }, [subscriber]);

    return (
        <View>
            <SafeAreaView
                style={{
                    paddingHorizontal: 22,
                    marginTop: 32,
                }}>
                <View style={{alignItems: 'center'}}>
                    <Image
                        source={avatar}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 50,
                            marginBottom: 16,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: '700',
                            color: '#282828',
                            marginBottom: 8,
                        }}>
                        Rizky Wahyu Prasetiyo
                    </Text>
                    <Text style={{fontSize: 16}}>
                        {subscriber} Subscriber - 1 Video
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default FlexBox;
