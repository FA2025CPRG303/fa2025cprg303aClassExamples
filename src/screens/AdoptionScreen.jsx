import { ScrollView, Text, View } from 'react-native';
import dogData from '../assets/data/dog-data.json';
import { useState } from 'react';
import DogListComp from '../components/adoption/dog-list';
import DogFormComp from '../components/adoption/dog-form';

export default function AdoptionScreen() {
  const [dogList, setDogList] = useState(dogData);

    function addNewDog(newDog){
        let newDogList = [...dogList, newDog];
        setDogList(newDogList);
    }

  return (
    <View style={{paddingBottom: 30}}>
      <ScrollView style={{padding:20}}>
        <Text style={{fontSize:30,textAlign:'center'}}>Dogs for Adoption</Text>
        <DogListComp dogArray={dogList} />
        <DogFormComp addDogFunc={addNewDog} />
        <View style={{height:100}}></View>
      </ScrollView>
    </View>
  );
}
