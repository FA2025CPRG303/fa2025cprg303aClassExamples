import { Button, Text, View } from "react-native";
import CounterDisplayComp from "../components/counter-display";
import { useState } from "react";
import { useMyTheme } from "../context/theme-context";

export default function CounterScreen(){
    const {themeStyles} = useMyTheme();
    const [count, setCount] = useState(0);

    // setCount(1); // Can't call setter directly in the render

    function increment(){ //Handler Function
        setCount(count + 1);
    }
    const decrement = () => setCount(count - 1);

    return(
        <View style={themeStyles.container}>
            {/* <CounterDisplayComp countDisplay={count} /> */}
            <CounterDisplayComp counterInt={count} />
            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={ () => setCount(count - 1) } />
        </View>
    );
}