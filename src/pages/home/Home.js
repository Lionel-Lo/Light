// Import module

import styles from './style';
import { View, ImageBackground, SafeAreaView, Text, Image } from 'react-native';





export default function HomePage(props) {

    const Background = { uri: 'https://d2psm37mwidfxy.cloudfront.net/allimages/appbackground32.jpg' }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background} style={styles.HomeBackground}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>Welcome to Light App</Text>
                    <Image source={require('../../../assets/picture/logo.png')} style={styles.logo} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}