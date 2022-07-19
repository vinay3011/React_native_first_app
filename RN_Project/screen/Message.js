import * as React from 'react';
import { Button, View } from 'react-native';


function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Chat')}
        title="Go to chat"
      />
    </View>
  );
}
export default MessageScreen;