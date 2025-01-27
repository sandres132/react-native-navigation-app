import '../gesture-handler.native';

import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <SideMenuNavigator/>
        </NavigationContainer>
    )
}