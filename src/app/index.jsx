import { FlatList } from 'react-native'
import { Header } from '../components/Header'
import { Task } from '../components/Task'
import { useState } from 'react'
import { Empty } from '../components/Empty'
import * as Crypto from 'expo-crypto'
import { MainContainer } from './styles'

export function Home() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])

    async function handleAddTask() {
        if (newTask) {
            const id = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                Date.now().toString(),
            )
            setTasks(tasks => [
                ...tasks,
                { id, title: newTask.trim(), isDone: false },
            ])
            setNewTask('')
        }
    }

    function handleTaskDone(id) {
        setTasks(task =>
            task.map(task => {
                if (task.id === id) {
                    task.isDone = !task.isDone
                }
                return task
            }),
        )
    }

    function handleTaskDeleted(id) {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    return (
        <MainContainer>
            <Header
                taskTitle={newTask}
                onTaskTextChange={setNewTask}
                onAddTask={handleAddTask}
            />
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task
                        {...item}
                        onTaskDone={() => handleTaskDone(item.id)}
                        onTaskDeleted={() => handleTaskDeleted(item.id)}
                    />
                )}
                ListEmptyComponent={<Empty />}
            />
        </MainContainer>
    )
}
