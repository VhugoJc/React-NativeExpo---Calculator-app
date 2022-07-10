import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Btn}  from '../components/Btn';
import {styles} from '../Theme/appTheme';
import { useState } from 'react';

export const Calculator = () => {

    const [num, setNum]=useState('0');
    const [lastNum, setLastNum]=useState('0');
    const [block, setblock] = useState(true);
    
    const reset = ()=>{
        if(num==='0'){
            setLastNum('0');
        }
        setNum('0');
    }

    const concNumber = (nextNumber:string) =>{
        if(num.includes('.') && nextNumber==='.'){
            return;
        }
        setNum(`${num==='0' ?'' :num}`+nextNumber);
    }

    const deleteNum = () =>{
        if(num.length!==1){
            setNum(num.slice(0,num.length-1));
        }else{
            setNum('0');
        }
    }

    const setSign = () =>{
        if(parseFloat(num)>0){
            setNum('-'+num);
        }else if(parseFloat(num)!==0){
            setNum(num.slice(1,num.length)+'');
        }
    }

    const mathFunction=(operator:string)=>{
        setLastNum(parseFloat(num)+operator);
        setNum('0');
        setblock(false);
    }

    const result = () =>{
        if(lastNum!=='0'&&!block){
            const operator = lastNum[lastNum.length-1];
            setLastNum(lastNum+num);
            switch(operator){
                case '+':
                    setNum((parseFloat(lastNum.slice(0,lastNum.length-1))+parseFloat(num))+"");
                    break;
                case '-':
                    setNum((parseFloat(lastNum.slice(0,lastNum.length-1))-parseFloat(num))+"");
                    break;
                case 'x':
                    setNum((parseFloat(lastNum.slice(0,lastNum.length-1))*parseFloat(num))+"");
                    break;
                case '/':
                    setNum((parseFloat(lastNum.slice(0,lastNum.length-1))/parseFloat(num))+"");
                    break;
            }
            
            setblock(true);
        }
    }

  return (
    <View style={styles.calcConteiner}>
        <Text 
            style={styles.Lastresult}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {lastNum}
        </Text>
        <Text style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {num}
        </Text>
        <View style={styles.rows}>
            <Btn onPress={reset} text="C" color="#9B9B9B"/>
            <Btn onPress={setSign} text="+/-" color="#9B9B9B"/>
            <Btn onPress={deleteNum} text="del" color="#9B9B9B"/>
            <Btn onPress={mathFunction} text="/" color="#FF9427"/>
        </View>
        <View style={styles.rows}>
            <Btn onPress={concNumber} text='1' />
            <Btn onPress={concNumber} text='2' />
            <Btn onPress={concNumber} text='3' />
            <Btn onPress={mathFunction} text="x" color="#FF9427"/>
        </View>
        <View style={styles.rows}>
            <Btn onPress={concNumber} text='4' />
            <Btn onPress={concNumber} text='5' />
            <Btn onPress={concNumber} text='6' />
            <Btn onPress={mathFunction} text="-" color="#FF9427"/>
        </View>
        <View style={styles.rows}>
            <Btn onPress={concNumber} text='7' />
            <Btn onPress={concNumber} text='8' />
            <Btn onPress={concNumber} text='9' />
            <Btn onPress={mathFunction} text="+" color="#FF9427"/>
        </View>
        <View style={styles.rows}>        
            <Btn onPress={concNumber} text='0' bigBtn/>
            <Btn onPress={concNumber} text='.' />
            <Btn onPress={result} text="=" color="#FF9427"/>
        </View>
      
    </View>
  )
}
