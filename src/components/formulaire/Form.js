// import style
import React from 'react';
import styles from './style';

// import module

import { reducer as formReducer } from 'redux-form';
import { SafeAreaView, Text, TextInput } from 'react-native';



export default function Form() {
    const [text, onChangeText] = React.useState('');
    const [password, onChangePwd] = React.useState('')
    console.log('text', text)
    console.log('password', password)

    return (

        <SafeAreaView style={styles.Border}>
            <TextInput
                style={styles.Text}
                onChangeText={onChangeText}
                value={text}
                placeholder= 'Enter your mail'
            />
              <TextInput
                style={styles.Text}
                onChangeText={onChangePwd}
                value={password}
                placeholder= 'Enter your password'
            />
        </SafeAreaView>

    )

}