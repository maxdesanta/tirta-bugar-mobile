import { useFonts } from "expo-font";

export const customFont = () => {
    const [fontsLoaded] = useFonts({
        'RobotoR': require('../assets/fonts/Roboto-Regular.otf'),
        'RobotoM': require('../assets/fonts/Roboto-Medium.otf'),
        'RobotoBl': require('../assets/fonts/Roboto-Black.otf'),
        'RobotoB': require('../assets/fonts/Roboto-Bold.otf'),
    });

    return fontsLoaded;
}