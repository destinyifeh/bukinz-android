import {Alert, ToastAndroid} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const flashSuccessMessage = description => {
  showMessage({
    message: 'Success',
    description: description,
    type: 'success',
    icon: props => <AntDesign name="checkcircle" color="white" size={18} />,
    titleStyle: {left: 5},
  });
};

const flashErrorMessage = description => {
  showMessage({
    message: 'Error',
    description: description,
    type: 'danger',
    icon: props => <MaterialIcons name="error" color="white" size={18} />,
    titleStyle: {left: 5},
  });
};

const flashAlertMesage = (title, message) => {
  Alert.alert(title, message);
};

const flastToastMessage = message => {
  ToastAndroid.show(message, ToastAndroid.LONG);
};

export {
  flashAlertMesage,
  flashErrorMessage,
  flashSuccessMessage,
  flastToastMessage,
};
