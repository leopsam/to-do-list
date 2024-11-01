import { MainContainer } from './styles'
import { Header } from '../components/Header'
import { Task } from '../components/Task'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Empty } from '../components/Empty'

export function Home() {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'teste', isDone: true},
        {id: 2, title: 'teste 2', isDone: false}
    ])
    return (
        <MainContainer>
           <Header />
           <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task
                        {...item}
                       
                    />
                )}
                ListEmptyComponent={<Empty />}
            />
        </MainContainer>
    )
}
