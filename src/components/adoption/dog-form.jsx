import { useState } from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
export default function DogFormComp( {addDogFunc} ) {
  const [inputDogName, setInputDogName] = useState('');
  const [inputDogAge, setInputDogAge] = useState('');
  const [inputDogBreed, setInputDogBreed] = useState('');
  function handleDogNameChange(test) {
    // console.dir(test);
    setInputDogName(test);
  }

  function handleSubmit(){
    // alert(`Name: ${inputDogName} | Age: ${inputDogAge} | Breed: ${inputDogBreed}`);
    // Validation
    if(inputDogName == null || inputDogName == ""){
        alert(`Please enter a dog name.`);
        return;
    }
    // --------------------- Trust Boundary
    let newDogObj = {
        dogName: inputDogName,
        dogAge: inputDogAge,
        dogBreed: inputDogBreed,
    }
    addDogFunc(newDogObj);
    setInputDogName("");
    setInputDogAge("");
    setInputDogBreed("");
  }
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Add a Dog for Adoption
      </Text>
      <View style={formStyles.formContainer}>
        <Text style={formStyles.label}>Dog Name:</Text>
        <TextInput style={formStyles.input} onChangeText={handleDogNameChange} value={inputDogName} />
        <Text style={formStyles.label}>Dog Age:</Text>
        <TextInput style={formStyles.input} onChangeText={setInputDogAge} value={inputDogAge} />
        <Text style={formStyles.label}>Dog Breed:</Text>
        <TextInput style={formStyles.input} onChangeText={setInputDogBreed} value={inputDogBreed} />
        <Pressable style={formStyles.btn} onPress={handleSubmit} >
          <Text style={formStyles.btnText}>Add Dog</Text>
        </Pressable>
      </View>
    </View>
  );
}
const formStyles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
