import { View } from "react-native";
import DogCardComp from "./dog-card";
export default function DogListComp({dogArray}){
    return(
        <View>
            {
                dogArray.map( (dog, index) => (
                    <DogCardComp dogObj={dog} key={index} />
                ) )
            }
        </View>
    )
}