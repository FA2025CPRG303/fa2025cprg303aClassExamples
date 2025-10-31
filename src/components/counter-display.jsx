import { Text, View } from "react-native";

// export default function CounterDisplayComp(props) {
export default function CounterDisplayComp( {counterInt} ) {
    // const {countDisplay} = props;
    return(
        <View>
            <Text style={{fontSize:40, textAlign:'center'}}>{counterInt}</Text>
        </View>
    );
}