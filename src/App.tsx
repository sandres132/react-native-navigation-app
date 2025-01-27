import '../gesture-handler.native';

import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';

export default function App() {
    return (
        <NavigationContainer>
            {/* <StackNavigator/> */}
            <SideMenuNavigator/>
            {/* <BottomTabsNavigator/> */}
        </NavigationContainer>
    )
}