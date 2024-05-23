import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView,ImageSourcePropType,ViewStyle } from "react-native";


interface CardProps {
    image:ImageSourcePropType,
    title:string,
    description:string,
    showDescription:boolean,
    width:string 
}

const SingleCard = ({image,title,description,showDescription,width}:CardProps) => {
    return <Card style={[styles.card,{width}]}>
    <Card.Cover style={styles.cardImage} source={image} />
    <View>
      <View style={styles.cardContent}>
        <Text variant="titleMedium">{title}</Text>
        {showDescription && <Text variant="titleMedium">{description}</Text>}
      </View>
    </View>
  </Card>
}

const styles = StyleSheet.create({
    cardImage: {
        borderRadius: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      card: {
        borderRadius: 15,
        marginRight: 10,
      },
      cardsContainer: {
        marginVertical: 15,
        flexDirection:"row"
      },
      cardContent: {
        padding: 15,
      },
})

export default SingleCard;