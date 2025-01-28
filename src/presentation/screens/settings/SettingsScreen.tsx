import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

    const navigator = useNavigation();

    return (
        <View style={ globalStyles.container }>
            <Text style={{ marginBottom: 10 }}>Settings Screen</Text>

            <PrimaryButton
                icon='return-up-back-outline'
                label='Return'
                onPress={ ()=> navigator.goBack() }
            />
            <PrimaryButton
                icon='home-outline'
                label='Return Home'
                onPress={ ()=> navigator.dispatch( StackActions.popToTop() ) }
            />
        </View>
    )
}