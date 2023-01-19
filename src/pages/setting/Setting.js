import styles from './style';
import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';



export default function Setting() {

    const Background = { uri: 'https://wallpapershome.com/images/pages/pic_h/22424.jpg' }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background} style={styles.HomeBackground}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Setting
                    </Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}