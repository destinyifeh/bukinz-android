import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}

async function deleteData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
}

async function getData(key) {
  const savedItem = await AsyncStorage.getItem(key);
  if (savedItem) {
    try {
      return JSON.parse(savedItem);
    } catch (err) {
      console.log(err);
    }
  }
  return null;
}

export {deleteData, getData, saveData};
