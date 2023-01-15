
import styles from './style';
import { View, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import HomeLightButton from '../../components/button/homeLightButton/HomeLightButton';
import HomeLoginButton from '../../components/button/homeLoginButton/HomeLoginButton';
import HomeSettingButton from '../../components/button/homeSettingButton/HomeSettingButton';




export default function homePage(props) {

    const Background = { uri: 'https://d2psm37mwidfxy.cloudfront.net/allimages/appbackground32.jpg' }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Background} style={styles.HomeBackground}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <HomeLoginButton />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Light')}>
                        <HomeLightButton />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Setting')}>
                        <HomeSettingButton />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}