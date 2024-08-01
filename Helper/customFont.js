import { useFonts } from "expo-font";

export const customFont = () => {
    const [fontsLoaded] = useFonts({
        'robotoR': require('../assets/fonts/Roboto-Regular.otf'),
        'RobotoM': require('../assets/fonts/Roboto-Medium.otf'),
        'robotoBl': require('../assets/fonts/Roboto-Black.otf'),
        'robotoB': require('../assets/fonts/Roboto-Bold.otf'),
    });

    return fontsLoaded;
}