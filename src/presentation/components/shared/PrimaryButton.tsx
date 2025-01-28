import { Text, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { Ionicon } from './Ionicon';

interface Props {
    label: string;
    onPress: () => void;
    icon?: string;
}

export const PrimaryButton = ({
    label,
    onPress,
    icon = undefined
}: Props ) => {
    return (
        <Pressable
            onPress={ () => onPress() }
            style={{
                ...globalStyles.primaryButton,
                alignContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                }}
            
            > 
                { (icon) ? <Ionicon size={20} name={ icon } /> : null }
                &nbsp;
                { label }
            </Text>
        </Pressable>
    )
}
