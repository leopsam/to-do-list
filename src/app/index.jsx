import { MainContainer } from './styles'
import { Header } from '../components/Header'
import { Task } from '../components/Task'

export function Home() {
    return (
        <MainContainer>
           <Header />
           <Task />
        </MainContainer>
    )
}
