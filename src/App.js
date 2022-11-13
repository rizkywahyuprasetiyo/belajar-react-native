import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import BasicJavascript from './pages/BasicJavascript';
import FlexBox from './pages/FlexBox';
import Komunikasi from './pages/Komunikasi';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';

const App = () => {
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShow(false);
        }, 10000);
    }, []);

    return (
        <View>
            {/* <Text>Rizky</Text>
            <Wahyu /> */}
            {/* <FlexBox /> */}
            {/* <PropsDinamis /> */}
            {/* <StateDinamis /> */}
            {/* <Komunikasi /> */}
            <BasicJavascript />
        </View>
    );
};

const Wahyu = () => {
    return (
        <View>
            <Text>Wahyu</Text>
        </View>
    );
};

export default App;
