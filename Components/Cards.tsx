import { Card, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {ORANGE_COLOR,CARDS_DATA} from "../Constants";


const SingleCard = () => {
  return (
    <View style={styles.cardsContainer}>
        {
            CARDS_DATA.map(({title,description,Icon,key}) => {
                return <Card key={key} style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <View style={{width:"100%"}}>
                    <Text variant="titleSmall" style={{fontWeight:"bold"}}>{title}</Text>
                    <Text variant="bodyMedium">{description}</Text>
                  </View>
                  <View>
                    {Icon}
                  </View>
                </Card.Content>
              </Card>
            })
        }
      
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 2.5,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 5,
  },
  card: {
    width: "44%",
    margin: 12,
    padding: 0,
    backgroundColor:"white"
  },
  cardContent: {
    flexDirection: "row",
    justifyContent:"space-around",
  },
});

export default SingleCard;
