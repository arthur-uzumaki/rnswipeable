import { Card, CardContent, CardHeader, CardTitle } from './Card'
import { Text } from './Text'

interface ContactsCardProps {
  name: string
  email: string
}

export function ContactsCard({ email, name }: ContactsCardProps) {
  return (
    <Card className=" h-[62px] justify-center rounded-lg bg-foreground p-2">
      <CardHeader className=" pb-2">
        <CardTitle className="text-muted">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text className="text-muted-foreground">{email}</Text>
      </CardContent>
    </Card>
  )
}
