import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEYS } from "./constantes";

export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(KEYS.store, JSON.stringify(value) )
    } catch (e) {
      throw "Error set store"
    }
}

export const getData = async () => {
  return  await AsyncStorage.getItem(KEYS.store)
    .then(value=>{
      if(value){
        return JSON.parse(value);
      }else{
        return [];
      }
    });
}