import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import { TaskContainer, ContainerText, TitleTask } from './styles'

export function Task({ id, title, isDone, onTaskDone, onTaskDeleted }) {
    return (
        <TaskContainer isDone={isDone}>
            <TouchableOpacity onPress={() => onTaskDone(id)}>
                <MaterialCommunityIcons
                    name={
                        isDone
                            ? 'checkbox-marked-outline'
                            : 'checkbox-blank-outline'
                    }
                    size={24}
                    color="#8b8b8b"
                />
            </TouchableOpacity>
            <ContainerText>
                <TitleTask isDone={isDone}>{title}</TitleTask>
            </ContainerText>
            <TouchableOpacity onPress={() => onTaskDeleted(id)}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color="#cc6c6c"
                />
            </TouchableOpacity>
        </TaskContainer>
    )
}
