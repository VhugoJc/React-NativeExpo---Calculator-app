import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#000",
    },
    result:{
        color:"#fff",
        fontSize:60,
        textAlign:"right",
        
    },
    Lastresult:{
        color:"rgba(255,255,255,0.5)",
        fontSize:30,
        textAlign:"right",
        
    },
    calcConteiner:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:"flex-end"
    },
    btn:{
        height:80,
        width:80,
        backgroundColor:"#9B9B9B",
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal:10,
        
    },
    btnText:{
        textAlign:"center",
        color:"#000",
        fontSize:30,
        fontWeight:"bold"
    },
    rows:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:18,
        paddingHorizontal:10
    }
});