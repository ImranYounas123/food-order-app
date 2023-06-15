import React from 'react'
import { CustomBtnProps } from '../types'
import { View, Text, Button } from 'react-native';
const CustomBtn = ({ btnType, title, onClick, disabled, btnStyleObj }: CustomBtnProps) => {
    return (
        <View style={btnStyleObj} >
            <Button title={title} onPress={onClick} disabled={disabled} color={btnType} />
        </View>

    )
}

export default CustomBtn