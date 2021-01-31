import React from 'react';
import {View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnIcon from '../btnChangeStatus';
import { STATUS } from './../../res/constantes';

export default function Task({task, visible, hiddeModal, deleteTask, updateTaskStatus}) {
    
    return (
        <Modal isVisible={visible}
            animationIn={'zoomInDown'} 
            animationOut={'zoomOutUp'} 
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}>
                <View style={styles.container}>
                    <Button
                        type="clear"
                        buttonStyle={{ borderColor:'red'}}
                        onPress={()=>hiddeModal()}
                        icon={
                            <Icon
                                name="close"
                                size={15}
                                color="red"
                            />
                            }
                        containerStyle={{ position: 'absolute', top: 3, right: 3 }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Que souhaitez vous faire?</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            titleStyle={styles.btnDelete} 
                            title="Supprimer" 
                            type="outline"
                            onPress={()=>deleteTask()}
                        />
                        <View style={styles.iconContainer}>
                            <BtnIcon 
                                icon="check" 
                                title={STATUS.done} 
                                titleStyle={styles.btnChange} 
                                iconStyle={styles.iconDone} 
                                onPressCallBack={()=>updateTaskStatus(STATUS.done)}/>
                            <BtnIcon 
                                icon="hourglass-half" 
                                title={STATUS.process} 
                                titleStyle={styles.btnChange} 
                                iconStyle={styles.iconeProcessing} 
                                onPressCallBack={()=>updateTaskStatus(STATUS.process)}/>
                            <BtnIcon 
                                icon="calendar" 
                                title={STATUS.todo} 
                                titleStyle={styles.btnChange} 
                                iconStyle={styles.iconIncomming} 
                                onPressCallBack={()=>updateTaskStatus(STATUS.todo)}/>
                        </View>
                        
                    </View>
                </View>
        </Modal>
    )
}