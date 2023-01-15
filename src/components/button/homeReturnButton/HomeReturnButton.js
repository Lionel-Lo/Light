import styles from './style';
import { View, Text, } from 'react-native';

export default function home() {

    return (
        <View style={styles.border}>
            <Text style={styles.text}>
                Home
            </Text>
        </View>
    )
}