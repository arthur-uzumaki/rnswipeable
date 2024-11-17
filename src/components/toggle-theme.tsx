import React, { useEffect } from 'react'
import { useColorScheme } from 'nativewind'
import { Toggle, ToggleIcon } from '@/components/Toggle'
import { Moon, Sun } from 'lucide-react-native'
import colors from 'tailwindcss/colors'
import clsx from 'clsx'

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setColorScheme('dark')
  }, [])

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Toggle
      pressed={colorScheme === 'dark'}
      onPress={toggleColorScheme}
      onPressedChange={pressed => {
        setColorScheme(pressed ? 'dark' : 'light')
      }}
      className={clsx({
        'bg-zinc-900': colorScheme === 'light',
        'bg-zinc-200': colorScheme === 'dark',
      })}
      size={'sm'}
    >
      <ToggleIcon
        icon={colorScheme === 'dark' ? Sun : Moon}
        size={20}
        color={colorScheme === 'dark' ? colors.orange[500] : colors.zinc[100]}
      />
    </Toggle>
  )
}
