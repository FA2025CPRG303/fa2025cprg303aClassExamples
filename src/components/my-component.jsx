import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useMyTheme } from '../context/theme-context';

export default function MyFirstComponent() {

  const {themeStyles} = useMyTheme();

  function sayHello() {
    alert('Hello World!');
  }

  return (
    <View style={{padding:10}}>
      <Text style={[myStyles.myText, themeStyles.text]}>
        This is my first react native component.
      </Text>
      <Image
        style={myStyles.myImage}
        source={require('../assets/images/cat.jpg')}
      />
      <Image
        style={myStyles.myImage}
        source={require('../assets/images/cat.jpg')}
      />
      <Image
        style={myStyles.myImage}
        source={require('../assets/images/cat.jpg')}
      />
      <Image
        style={myStyles.myImage}
        source={{
          uri: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_2295.jpg',
        }}
      />
      <Button title="Say Hello!" onPress={sayHello} />
      <Pressable style={myStyles.myButton} onPress={sayHello}>
        <Text style={myStyles.myButtonText}>Say Hello!</Text>
      </Pressable>
      <Text>Simple Form</Text>
      <Text>Name:</Text>
      <TextInput style={myStyles.myInput} placeholder="John Smith" />
      <Text>Phone:</Text>
      <TextInput style={myStyles.myInput} keyboardType="numeric" />
      <Text>Password:</Text>
      <TextInput style={myStyles.myInput} secureTextEntry={true} />
    </View>
  );
}

const myStyles = StyleSheet.create({
  myText: {
    fontSize: 20,
    marginBottom: 6,
  },
  myImage: {
    width: 320,
    height: 200,
  },
  myButton: {
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 10,
  },
  myButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  myInput: {
    borderWidth: 2,
    borderColor: 'blue',
  },
});
