import { Text, View } from "react-native";
import { useMyTheme } from "../context/theme-context";

// export default function CounterDisplayComp(props) {
export default function CounterDisplayComp( {counterInt} ) {
    const {themeStyles} = useMyTheme();
    // const {countDisplay} = props;
    return(
        <View>
            <Text style={[{fontSize:40, textAlign:'center'}, themeStyles.text]}>{counterInt}</Text>
        </View>
    );
}