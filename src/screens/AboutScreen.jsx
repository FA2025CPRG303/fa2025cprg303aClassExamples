import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import VolunteerDisplayComp from "../components/volunteer-display";

let people = [
    {
        fname: 'John',
        age: 30,
        city: 'Calgary'
    },
    {
        fname: 'Alice',
        age: 25,
        city: 'Edmonton'
    },
    {
        fname: 'Frank',
        age: 35,
        city: 'Lethbridge'
    }
];

let person = {
    fname: 'Jane',
    age: 20,
    city: 'Calgary'
}

export default function AboutScreen() {
    const [volunteerList, setVolunteerList] = useState(people);
    const nav = useNavigation();
    function addPerson(){
        let newVolunteerList = [...volunteerList, person];
        setVolunteerList(newVolunteerList);
    }
    return(
        <View>
            <Text>About Screen!</Text>
            <Button title="Go to Contact" onPress={ () => nav.navigate('Contact') } />
            {
                volunteerList.map( (volunteer, index) => (
                    <VolunteerDisplayComp volunteerObj={volunteer} key={index} />
                ) )
            }
            <Button title="Add Person" onPress={addPerson} />
        </View>
    )
}