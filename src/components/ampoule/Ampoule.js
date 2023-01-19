// import style

import styles from './style';

// import module

import { Image,} from 'react-native';

export default function ampoule() {
    return(
        <Image source={require('../../../assets/picture/ampoule.png')} style={styles.ampouleLogo} />
    )
}