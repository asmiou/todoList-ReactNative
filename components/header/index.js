import React from 'react'
import {Text, View, } from 'react-native';
import styles  from './styles';

export default function Header() {
    return (<>
        <View style={styles.container}>
            <Text style={styles.title}>Liste des tâches</Text>
        </View>
    </>)
}


