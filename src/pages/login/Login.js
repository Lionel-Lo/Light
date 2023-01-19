// import style

import styles from './style';

// Import module

import { View, Text, ImageBackground, SafeAreaView } from 'react-native';


export default function Login() {

    const Background = { uri: 'https://wallpapershome.com/images/pages/pic_h/22423.jpg' }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background} style={styles.HomeBackground}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Login
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}