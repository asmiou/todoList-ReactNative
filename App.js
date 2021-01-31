import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import BtnAdd from './components/btnAdd';
import Header from './components/header';
import TaskList from './components/list';
import { TASKKIST, STATUS, KEYS } from './res/constantes';
import { View, ScrollView } from 'react-native';
import Task from './components/task/index';
import lodash from 'lodash';
import DialogTask from './components/DialogTask';
import {getData, storeData} from './res/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      TASKKIST:[],
      currentTask:{},
      isVisibleModal:false,
      isVisibleDialog:false,
      isEditingMode:false
    }  
  }

  componentDidMount(){
    this.loadData();
  }

  loadData = ()=>{
    getData().then(d=>{
      this.setState({TASKKIST:d});
    });
  }

  saveInStorage= async (data)=>{
    storeData(data);
  }


  toggleDisplayTask = task =>{
    if(task!=undefined){
      this.setState({isVisibleModal:!this.state.isVisibleModal, currentTask:task});
    }
    else{
      this.setState({isVisibleModal:!this.state.isVisibleModal, currentTask:{}});
    }
  }

  toggleDisplayTaskDialog = () =>{
    this.setState({isVisibleDialog:!this.state.isVisibleDialog});
  }

  updateTaskStatus = (status) =>{

    const updatedTask = {...this.state.currentTask, status};
    const index = lodash.findIndex(this.state.TASKKIST, {id:this.state.currentTask.id});
    const list = this.state.TASKKIST
    list[index]=updatedTask
    this.setState({TASKKIST:list, currentTask:{}}, ()=>this.saveInStorage(this.state.TASKKIST));
    this.toggleDisplayTask();
  }

  deleteTask = () =>{
    const index = lodash.findIndex(this.state.TASKKIST, {id:this.state.currentTask.id});

    const list = this.state.TASKKIST
    list.splice(index,1);
    this.setState({TASKKIST:list, currentTask:{}}, ()=>this.saveInStorage(this.state.TASKKIST));
    this.toggleDisplayTask();
  }

  AddEditTask =(task)=>{
    if(!this.state.isEditingMode){
      task.id=this.state.TASKKIST.length+1;
      task.status=STATUS.todo
      
      this.setState({TASKKIST:[...this.state.TASKKIST,task], currentTask:{}},()=>this.saveInStorage(this.state.TASKKIST));
      
      this.toggleDisplayTaskDialog();
      
    }else{
      const index = lodash.findIndex(this.state.TASKKIST, {id:this.state.currentTask.id});
      const list = this.state.TASKKIST
      list[index]=task
      this.setState({TASKKIST:list, isEditingMode:false,currentTask:{},isVisibleDialog:false},()=>this.saveInStorage(this.state.TASKKIST));
      
    }
  }

  onLongPressAction=(task)=>{
    this.setState({isEditingMode:true, isVisibleDialog:true, currentTask:task});
  }

  render(){
     return (
        <View style={{flex:1}}>
          
          <StatusBar style="auto" />
          <Header/>
          <ScrollView>
            <TaskList 
                onPressCallBack={this.toggleDisplayTask} 
                onLongPressCallBack={this.onLongPressAction} 
                list={this.state.TASKKIST}
            />
          </ScrollView>
          <Task 
            visible={this.state.isVisibleModal} 
            hiddeModal={this.toggleDisplayTask}
            deleteTask={this.deleteTask} 
            updateTaskStatus={this.updateTaskStatus}
          />
          <BtnAdd showDialog={this.toggleDisplayTaskDialog}/>
          <DialogTask 
            isVisible={this.state.isVisibleDialog} 
            currentTask={this.state.currentTask} 
            onCancelCallBack={this.toggleDisplayTaskDialog} 
            onSubmitCallBack={this.AddEditTask}/>
        </View>
      );
    }
}

