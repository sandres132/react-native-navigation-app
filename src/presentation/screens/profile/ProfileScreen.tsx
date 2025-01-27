import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={{
            ...globalStyles.container,
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: top,
        }}>
            <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>

            <PrimaryButton
                label='Open Menu'
                onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
            />
        </View>
    )
}