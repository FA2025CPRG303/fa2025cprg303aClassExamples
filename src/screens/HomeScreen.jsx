import { useNavigation } from '@react-navigation/native';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import MyFirstComponent from '../components/my-component';

export default function HomeScreen() {
  const nav = useNavigation();

  return (
    <View style={homeStyles.container}>
      <ScrollView>
        <Text style={{ fontSize: 30, textAlign: 'center', color: 'blue' }}>
          Hello World!
        </Text>
        <Button title="API Art Gallery" onPress={() => nav.navigate('Gallery')} />
        <Button title="Dog Adoption" onPress={() => nav.navigate('Adopt')} />
        <Button title="Go to Counter" onPress={() => nav.navigate('Counter')} />
        <Button title="Go to About" onPress={() => nav.navigate('About')} />
        {/* <Button title="Go Back" onPress={ () => nav.goBack() } /> */}
        <MyFirstComponent />
      </ScrollView>
    </View>
  );
}

const homeStyles = StyleSheet.create({
    container: {
        paddingBottom: 40
    }
})
