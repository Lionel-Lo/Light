import styles from './style';
import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import HomeReturnButton from '../../components/button/homeReturnButton/HomeReturnButton';


export default function Login(props) {

    const Background = { uri: 'https://wallpapershome.com/images/pages/pic_h/22423.jpg' }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background} style={styles.HomeBackground}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Login
                    </Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <HomeReturnButton />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}