import { ContactsCard } from '@/components/contacts-card'
import { Header } from '@/components/header'
import { Options } from '@/components/options'
import { contacts } from '@/utils/contacts'
import { useRef, useState } from 'react'
import { FlatList, View } from 'react-native'
import Swipeable, {
  type SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable'

export function Home() {
  const [contactsState, setContactsState] = useState(contacts)

  const openSwipeableRef = useRef<SwipeableMethods | null>(null)

  function handleRemoveContacts(id: string) {
    const updatedContacts = contacts.filter(item => item.id !== id)
    setContactsState(updatedContacts)
  }

  function closePreviousSwipeable(
    direction: 'left' | 'right',
    current: SwipeableMethods | null
  ) {
    if (direction === 'right') {
      return
    }

    if (openSwipeableRef.current) {
      openSwipeableRef.current.close()
    }

    openSwipeableRef.current = current
  }

  return (
    <View className="flex-1 bg-foreground pt-16">
      <Header />

      <View className="mt-5 px-4">
        <FlatList
          data={contactsState}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            let current: SwipeableMethods | null = null
            return (
              <Swipeable
                // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
                ref={swipeable => (current = swipeable)}
                containerStyle={{ borderRadius: 8 }}
                overshootRight={false}
                friction={3}
                rightThreshold={10}
                dragOffsetFromRightEdge={50}
                onSwipeableWillOpen={direction =>
                  closePreviousSwipeable(direction, current)
                }
                renderRightActions={() => (
                  <View className="flex-row ">
                    <Options icon="open-in-new" className="bg-emerald-500" />
                    <Options
                      icon="delete"
                      className="bg-red-500"
                      onPress={() => handleRemoveContacts(item.id)}
                    />
                  </View>
                )}
              >
                <ContactsCard name={item.name} email={item.email} />
              </Swipeable>
            )
          }}
          contentContainerClassName="gap-14 pb-20"
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
