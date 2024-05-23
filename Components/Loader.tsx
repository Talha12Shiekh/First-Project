import {View,Text,StyleSheet} from "react-native";
import {ORANGE_COLOR} from "../Constants";

const Loader = () => {
    return <View style={styles.loaderContainer}>
    <View style={styles.loaderTextContainer}>
        <Text style={styles.white}>$450</Text>
        <Text style={styles.white}>2024 donation goal</Text>
        <Text style={styles.white}>$1,000</Text>
    </View>
    <View >
        <View style={styles.loader}>
            <View style={styles.indicator}/>
            <View style={[styles.indicator,{backgroundColor:"green",width:"40%"}]}/>
        </View>
    </View>
    </View>
}

const styles = StyleSheet.create({
    loaderContainer:{
        flex:0.8,
    },
    loader:{
        width:"90%",
        backgroundColor:"grey",
        height:10,
        borderRadius:50,
        alignSelf:"center",
        position:"relative",
        marginTop:10
    },
    indicator:{
        position:"absolute",
        ...StyleSheet.absoluteFillObject,
        backgroundColor:"white",
        borderRadius:50,
        width:"70%",
        zIndex:9999
    },
    loaderTextContainer:{
        flexDirection:"row",
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-between"
    },
    white:{
        color:"white"
    }
})

export default Loader