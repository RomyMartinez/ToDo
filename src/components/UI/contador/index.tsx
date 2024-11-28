import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
  nome: string
  valor: number
  done?: boolean
}

export function Contador({ nome, valor, done }: Props) {
  return (
    <View style={styles.container}>
      <Text style={done ? styles.done : styles.title}>{nome}</Text>
      <Text style={styles.counter}>{valor}</Text>
    </View>
  )
}
