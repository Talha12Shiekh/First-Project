import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ORANGE_COLOR } from "../Constants";

const QuestionButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.buttonView}>

           <Text style={styles.btnText}> Frequently Asked questions </Text>

           <Text style={styles.btnText}> {">"} </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={[styles.btnText,{textAlign:"center",marginTop:20,color:ORANGE_COLOR}]}> Voulnteer with us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: "90%",
    alignSelf:"center",
    height:70,
    backgroundColor:ORANGE_COLOR,
    borderRadius:20,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:20
  },
  container:{
    flex:2,
    paddingVertical:10
  },
  btnText:{
    color:"white",
    fontWeight:"bold"
  }
});

export default QuestionButton;