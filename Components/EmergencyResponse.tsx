import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import { EMERGENCY_DATA } from "../Constants";
import SingleCard from "./SingleCard";

const EmergencyResponse = () => {
  return (
    <View style={styles.EmergencyContainer}>
      <Text variant="titleLarge" style={{ color: "black", fontWeight: "bold",marginBottom:20 }}>
        Emergency Response
      </Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:250}} horizontal>
          {EMERGENCY_DATA.map(({key,image,text,description}) => {
            return (
              <SingleCard  key={key} image={image} title={text} description={description} showDescription={true} width="30%"/>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  EmergencyContainer: {
    flex: 3.5,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default EmergencyResponse;