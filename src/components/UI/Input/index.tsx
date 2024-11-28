import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'

type Props = {
  onAddTask: (task: string) => void
}

export function Input({ onAddTask }: Props) {
  const [task, setTask] = useState('')
  const [isInput, setIsInput] = useState(false)

  return (
    <View style={styles.form}>
      <TextInput
        style={!isInput ? styles.input : styles.inputHover}
        onFocus={() => setIsInput(true)}
        onBlur={() => setIsInput(false)}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Add a task"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onAddTask(task)
          setTask('')
        }}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
