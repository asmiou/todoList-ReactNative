import React from 'react'
import { View, Text } from 'react-native';
import {ListItem, Badge} from 'react-native-elements';
import styles from './style';
import { getColor, getIcone } from './../../res/constantes';
import Icon from 'react-native-vector-icons/FontAwesome';


const TaskList=({list, onPressCallBack, onLongPressCallBack})=> {
    
    return(
        <View style={styles.container}>
            {!list.length && <Text>Aucune tâche ...</Text>}
            {list.length>0 && list.map(l=>
                <ListItem key={l.id} bottomDivider onPress={()=>onPressCallBack(l)} onLongPress={()=>onLongPressCallBack(l)}>
                    
                    <Icon name={getIcone(l.status)} type='font-awesome' size={10}/>
                    <ListItem.Content>
                        <ListItem.Title style={styles.title}>{l.title}</ListItem.Title>
                        <ListItem.Subtitle style={{color:"#6c757d"}}>{l.description}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Badge 
                        value={l.status}
                        status={getColor(l.status)}
                        style={styles.badge}
                    />
                    <ListItem.Chevron />
                </ListItem>
            )}
        </View>
    );
    
}

export default TaskList;