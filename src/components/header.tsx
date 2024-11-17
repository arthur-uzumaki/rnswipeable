import { Image, View } from 'react-native'
import { Text } from './Text'
import { ThemeToggle } from './toggle-theme'
export function Header() {
  return (
    <View className=" flex-row justify-between border-b border-b-muted-foreground px-4">
      <View className="flex-row items-center gap-2 pb-3">
        <Image
          source={{ uri: 'https://github.com/arthur-uzumaki.png' }}
          className="size-10 rounded-full"
        />
        <Text className="text-muted text-xl">Arthur Sousa</Text>
      </View>
      <View>
        <ThemeToggle />
      </View>
    </View>
  )
}
