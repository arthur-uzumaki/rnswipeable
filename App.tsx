import { Home } from '@/app'
import { ThemeProvider } from '@/provider/theme-provider'
import '@/styles/global.css'

import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <StatusBar style="inverted" backgroundColor="transparent" />
        <Home />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
