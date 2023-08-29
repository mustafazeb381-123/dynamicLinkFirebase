import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import NavService from '../navigation/NavSerivce'
import DynamicLink from './DynamicLink'
import { EStacks } from '../navigation/appRoutes'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { Link } from '@react-navigation/native'


const SplashScreen = () => {


    useEffect(() => {

        generateRandomLink()
        
       


        
    }, []);

    const allowedScreens = ['ScreenA', 'ScreenB',];

    const generateRandomLink = async () => {
        const randomScreen = allowedScreens[Math.floor(Math.random() * allowedScreens.length)];
        console.log("randomScreen", randomScreen)

        try {
            const link = await dynamicLinks().buildLink({
                link: `https://xuxxaiiilink.page.link/Tbeh?screen=${randomScreen}`,
                domainUriPrefix: 'https://xuxxaiiilink.page.link/',
                android: {
                    packageName: 'com.dynamiclinkfirebase',
                },
            }, );
            console.log('link:', link);
            handleDynamicLink({ url: link } );
            return link;
        } catch (error) {
            console.log('Generating Link Error:', error);
        }
    };



    const handleDynamicLink = (link: any) => {
        const queryParamsStartIndex = link.url.indexOf('?');
        console.log("queryparamsStringIndex", queryParamsStartIndex)

        if (queryParamsStartIndex !== -1) {
            const queryParamsString = link.url.substring(queryParamsStartIndex + 1);
            console.log("query 1", queryParamsString);

            // Check if the queryParamsString contains "screen=ScreenA"
            if (queryParamsString.includes('ScreenA')) {
                NavService.navigate(EStacks.SCREEN_A); // Navigate to ScreenA
            } else if (queryParamsString.includes('ScreenB')) {
                NavService.navigate(EStacks.SCREEN_B); // Navigate to ScreenB
            }
        }
    };
   
   

  return (
    <View style={styles.main}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor:'white', justifyContent:'center', alignItems:'center', flex:1
    }, 
    text: {
        color:'black', fontSize:21, fontWeight:'700'
    }
})

export default SplashScreen