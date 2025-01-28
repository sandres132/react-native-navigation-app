import React,{ useEffect } from 'react';
import { Pressable } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicon } from './Ionicon';
import { globalColors } from '../../theme/theme';

export const HamburguerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
                    <Ionicon name='menu-outline' size={30} color={ globalColors.primary } marginHorizontal={10}/>
                </Pressable>
            )
        })
    
    }, []);
    
    return (
        <></>
    )
}