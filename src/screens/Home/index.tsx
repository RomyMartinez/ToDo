import { View, Text, FlatList, Alert } from 'react-native'
import { Input } from '../../components/UI/Input'
import { styles } from './styles'
import { useState } from 'react'
import { EmpytTask } from '../../components/UI/empyTask'
import { Contador } from '../../components/UI/contador'
import { Task } from '../../components/task'

type tasks = {
  task: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<tasks[]>([])

  let tasksDone = tasks.reduce((prev, current) => {
    if (current.done) {
      return prev + 1
    }
    return prev
  }, 0)

  function handleAddTask(task: string) {
    if (tasks.some((item) => item.task === task)) {
      Alert.alert('Esta tarefa já existe')
      return
    }
    setTasks([...tasks, { task, done: false }])
  }

  function handleDoneTask(task: string) {
    setTasks((prevState) =>
      prevState.map((item) =>
        item.task === task ? { ...item, done: !item.done } : item
      )
    )
  }

  function handleDeleteTask(task: string) {
    Alert.alert('Tem certeza que deseja deletar esta tarefa?', task, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((item) => item.task !== task)
          )
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>ToDo</Text>
        <Input onAddTask={handleAddTask} />
      </View>
      <View style={styles.info}>
        <Contador nome="Criadas" valor={tasks.length} />
        <Contador nome="Concluídas" valor={tasksDone} done />
      </View>
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={({ task }) => task}
        renderItem={({ item }) => (
          <Task
            task={item.task}
            done={item.done}
            onDone={handleDoneTask}
            onDelete={handleDeleteTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmpytTask />}
      />
    </View>
  )
}
