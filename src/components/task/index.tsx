import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  task: string
  done: boolean
  onDone: (task: string) => void
  onDelete: (task: string) => void
}

export function Task({ task, done, onDone, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={!done ? styles.done : styles.check}
        onPress={() => onDone(task)}
      >
        {done && <Text style={styles.checkText}>✓</Text>}
      </TouchableOpacity>
      <Text style={!done ? styles.task : styles.taskDone}>{task}</Text>
      <TouchableOpacity style={styles.delete} onPress={() => onDelete(task)}>
        <Text>🗑</Text>
      </TouchableOpacity>
    </View>
  )
}
