import React from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';
import styles  from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BtnAdd({showDialog}) {

    return (
            <View style={styles.container}>
                <Button style={styles.btn}
                    onPress={showDialog} 
                    icon={
                        <Icon
                            name="plus"
                            size={15}
                            color="white"
                        />
                    }
                />
            </View>
        );
}
