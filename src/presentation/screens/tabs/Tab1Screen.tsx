import { View, Text } from 'react-native';

import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import { Ionicon } from '../../components/shared/Ionicon';

export const Tab1Screen = () => {
    
    return (
        <View>
            <HamburguerMenu/>
            <Text>Tab1 Screen</Text>

            <Ionicon name='rocket-outline' size={100}/>
        </View>
    )
}