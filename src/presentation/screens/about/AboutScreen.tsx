import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

export const AboutScreen = () => {
    return (
        <View style={ globalStyles.container }>
            <Text>AboutScreen</Text>

            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eaque repellat beatae nostrum perferendis sit unde officiis, consequuntur molestiae consequatur similique, eum amet explicabo, commodi doloremque! Inventore labore voluptatem velit.
            </Text>
        </View>
    )
}