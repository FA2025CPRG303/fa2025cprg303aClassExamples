import { ScrollView, Text, View } from "react-native";
import { ThemeContextProvider } from "../context/theme-context";

export default function ThemeLayout({children}){
    return(
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );

    /*
    return(
        <ScrollView>
            <View>
                <Text>This is the header</Text>
                <NavBar />
            </View>
            {children}
            <View>
                <Text>This is the footer</Text>
            </View>
        </ScrollView>
    );
    */
}