import React, { useState } from "react";
import styles from './style';
import { Image, View, TouchableOpacity } from 'react-native';
import Ampoule from "../../ampoule/Ampoule";

export default function button() {
    const [isLight, setIsLight] = useState(false);
    function onPressButton() {
        setIsLight(!isLight)
    }

    return (
        <View style={isLight ? styles.containerActive : styles.container}>
            <Ampoule />
            <TouchableOpacity
                style={styles.circle}
                activeOpacity={0.5}
                onPress={onPressButton}>
                <View style={styles.powerLogo}>
                    <Image source={require('../../../../assets/picture/power.png')} style={styles.powerLogo} />
                </View>
            </TouchableOpacity>
        </View>
    );
}