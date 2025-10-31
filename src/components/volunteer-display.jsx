import { Text, View } from "react-native";

export default function VolunteerDisplayComp( {volunteerObj} ) {
    const {fname, age, city} = volunteerObj;
    return(
        <View>
            <Text style={{fontSize:20, color:'blue'}}>{fname}</Text>
            <Text>Age: {age}</Text>
            <Text>City: {city}</Text>
        </View>
    );
}