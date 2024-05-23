import {Text,StyleSheet,View,TouchableOpacity} from "react-native";
import {ORANGE_COLOR} from "../Constants";
import { AntDesign } from '@expo/vector-icons';
// import {
//   useFonts,
//   NunitoSans_200ExtraLight,
//   NunitoSans_300Light,
//   NunitoSans_400Regular,
//   NunitoSans_600SemiBold,
//   NunitoSans_700Bold,
//   NunitoSans_800ExtraBold,
//   NunitoSans_900Black,
// } from '@expo-google-fonts/nunito-sans';

const Home = () => {
    // let [fontsLoaded] = useFonts({
    //     NunitoSans_200ExtraLight,
    //     NunitoSans_300Light,
    //     NunitoSans_400Regular,
    //     NunitoSans_600SemiBold,
    //     NunitoSans_700Bold,
    //     NunitoSans_800ExtraBold,
    //     NunitoSans_900Black,
    //   });



    
    return (
            <View style={styles.homeContainer}>
        <View style={styles.home}>
        <View style={styles.cornerBall}>
            <Text style={styles.ballText}>penny</Text>
            <Text style={[styles.ballText,{bottom:40,right:40,fontWeight:"bold"}]}>appeal</Text>
        </View>
    </View>
    <View style={styles.searchBarContainer}>
        <Text style={styles.searchText}><Text style={{fontWeight:"bold"}}>Salam,</Text> Ahmed</Text>
        <TouchableOpacity>
            <AntDesign name="search1" size={35} color="white" />
        </TouchableOpacity>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
    home:{
        flex:3,
    },
    cornerBall:{
        width:200,
        aspectRatio:1,
        backgroundColor:'white',
        borderRadius:100,
        transform:[{translateX:-40},{translateY:-40}],
        position:"relative"
    },
    ballText:{
        fontSize:30,
        position:"absolute",
        right:50,
        bottom:80,
        color:ORANGE_COLOR,
    },
    homeContainer:{
        flexDirection:"row"
    },
    searchBarContainer:{
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        gap:20,
    },
    searchText:{
        fontSize:20,
        color:"white"
    }
})

export default Home