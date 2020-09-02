import React from 'react';
import {Image} from 'react-native';

Logo=({source,style})=>{
    return(
        <Image source={source} style={style} ></Image>
    )
}

export default Logo;