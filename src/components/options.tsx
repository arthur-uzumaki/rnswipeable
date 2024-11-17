import type { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { twMerge } from 'tailwind-merge'
import colors from 'tailwindcss/colors'
import { Button } from './Button'

interface OptionsProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  className?: string
}

export function Options({ icon, className, ...rest }: OptionsProps) {
  return (
    <Button
      activeOpacity={0.7}
      size={'xl'}
      className={twMerge(' items-center justify-center ', className)}
      {...rest}
    >
      <MaterialIcons name={icon} color={colors.white} size={24} />
    </Button>
  )
}
