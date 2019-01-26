import * as React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import styles from './utils/styles';
import {View, Text} from 'react-native';


const App = props => {
  return (
      <Provider store={store} {...props}>
        <View style={styles.container}>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
  );
};

export default App;