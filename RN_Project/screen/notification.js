import * as React from 'react';
import { Button, View } from 'react-native';


function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        onPress={() => navigation.navigate('Login')}
        title="Logout"
      />
      </View>
    );
  }

  export default NotificationsScreen;