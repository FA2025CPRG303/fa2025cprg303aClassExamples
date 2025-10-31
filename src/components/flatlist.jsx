import { FlatList, View } from 'react-native';

export default function FlatlistComp() {
  let myArray = [];
  for (let i = 0; i < 400; i++) {
    let thisText = `Item #${i}`;
    myArray.push(thisText);
  }
  return (
    <View>
      <FlatList
        data={myArray}
        renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
