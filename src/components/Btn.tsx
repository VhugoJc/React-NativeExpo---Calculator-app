import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/appTheme';

interface Props {
    onPress: (text:string) => void;
    text: string;
    color?: "#9B9B9B" | "#2D2D2D" | "#FF9427"  ;
    bigBtn?: boolean;
}
export const Btn = ({text,color="#2D2D2D",bigBtn=false,onPress}:Props) => {
    return (
        <TouchableOpacity onPress={()=>onPress(text)}>
            <View style={{...styles.btn,backgroundColor:color,width: bigBtn ?180 :80}}>
                <Text style={{...styles.btnText,color: color==="#9B9B9B" ? "#000" :"#fff"}}>
                    {text}
                </Text>
            </View> 
        </TouchableOpacity>
)
}
