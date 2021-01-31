import React,{useState, useEffect} from 'react';
import Dialog from 'react-native-dialog';
import {View} from 'react-native';
import styles from './style';

export default function DialogTask({isVisible, currentTask, onCancelCallBack, onSubmitCallBack}) {
    const [task, setTask] = useState({
        id: null,
        description:"",
        title: "",
        status: ""
    });

    useEffect(() => {
        setTask(currentTask);
    }, [currentTask]);

    return (
        <View>
            <Dialog.Container visible={isVisible}>
                <Dialog.Title>{currentTask?"Modification":"Nouvelle tâche"}</Dialog.Title>
                <Dialog.Input 
                    value={task.title} 
                    wrapperStyle={styles.warpper} 
                    label="Title" 
                    onChangeText={(title) => setTask({...task, title})} 
                />
                <Dialog.Input 
                    value={task.description} 
                    wrapperStyle={styles.warpper} 
                    multiline={true} 
                    label="Description"
                    onChangeText={(description) =>setTask({...task, description})} 
                />
                <Dialog.Button 
                    label="Annuler" 
                    onPress={()=>{onCancelCallBack()}} 
                />
                <Dialog.Button 
                    label="Valider" 
                    onPress={()=>{
                        onSubmitCallBack(task)
                    }}
                />   
            </Dialog.Container>
        </View>
    )
}
