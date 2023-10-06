import { createTheme, lightColors, darkColors, ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './src/stacks/AppStack';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
    default: lightColors.platform.android,
    ios: lightColors.platform.ios,
    })
  },
  darkColors: {
    ...Platform.select({
    default: darkColors.platform.android,
    ios: darkColors.platform.ios,
    })
  },
  mode: 'adaptive'
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AppStack />
        <StatusBar style="light" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
