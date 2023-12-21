import React from 'react';
import {SafeAreaView} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {appStateTracker} from './src/helpers/utility';
import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/state-management/store';
function App() {
  React.useEffect(() => {
    appStateTracker();
    //notificationService();
    // runTask();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
        <FlashMessage position="top" floating={true} />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
