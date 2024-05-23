import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView} from "react-native";
import { CAUSES_DATA } from "../Constants";
import SingleCard from "./SingleCard"

const FeaturedCourses = () => {
  return (
    <View style={styles.EmergencyContainer}>
      <Text variant="titleLarge" style={{ color: "black", fontWeight: "bold",marginBottom:20 }}>
        Featured Causes
      </Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {CAUSES_DATA.map(({key,image,text}) => {
            return (
              <SingleCard  key={key} image={image} title={text} description={""} showDescription={false} width="12%"/>
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

export default FeaturedCourses;
