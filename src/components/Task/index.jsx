import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import { TaskContainer, ContainerText, TitleTask } from './styles'

export function Task() {
    return (
        <TaskContainer>
            <TouchableOpacity>
                <MaterialCommunityIcons
                    name={'checkbox-marked-outline'}
                    size={24}
                    color="#8b8b8b"
                />
            </TouchableOpacity>
            <ContainerText>
                <TitleTask>teste</TitleTask>
            </ContainerText>
            <TouchableOpacity>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color="#cc6c6c"
                />
            </TouchableOpacity>
        </TaskContainer>
    )
}
