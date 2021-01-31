import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BtnIcon({icon,type='clear', title, titleStyle, iconStyle, onPressCallBack}) {
    return (
        <Button
            icon={ <Icon
                    type='font-awesome'
                    name={icon}
                    size={20}
                    style={iconStyle}
                    
                />
            }
            titleStyle={titleStyle}
            type={type}
            title={title}
            onPress={()=>onPressCallBack()}
        />
    )
}
