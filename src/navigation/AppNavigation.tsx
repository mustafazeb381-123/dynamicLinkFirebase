import React, { useCallback, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { EStacks } from './appRoutes';
import NavService from './NavSerivce';
import SplashScreen from '../screen/SplashScreen';
import ScreenA from '../screen/ScreenA';
import ScreenB from '../screen/ScreenB';
import DynamicLink from '../screen/DynamicLink';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const routeName = useRef<string | undefined>();
  

    const handleScreenChange = useCallback(async () => {
        const currentRouteName = NavService.getCurrentRoute();
        routeName.current = currentRouteName;
    }, []);

    return (
        <NavigationContainer
            ref={NavService.getNavRef()}
            onStateChange={handleScreenChange}
           
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               
                
                        <Stack.Screen name={EStacks.SPLASHSCREEN} component={SplashScreen} />
                        <Stack.Screen name={EStacks.SCREEN_A} component={ScreenA} />
                <Stack.Screen name={EStacks.SCREEN_B} component={ScreenB} />
                <Stack.Screen name={EStacks.DYNAMIC_LINK} component={DynamicLink} />
                
               
             
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
