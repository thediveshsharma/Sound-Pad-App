import React  from 'react';
import { Text,  TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

function Pad(props){

    const { num , onPressPad} = props;

    return(
        <TouchableOpacity 
            onPress={onPressPad}
        >
            <View style={{backgroundColor:'yellow' , height: 175 , width : 175 , margin : 10 ,display:"flex" ,justifyContent:"center"}}>
                <Text style={{textAlign:"center" , color :'brown' , fontSize : 40}} >
                {num}

                </Text>
            </View>
        </TouchableOpacity>
    )

    
}

export default Pad;