import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import {
    HeaderContainer,
    Title,
    FormContainer,
    InputItem,
    ButtonItem,
} from './styles'

export function Header({ taskTitle, onTaskTextChange, onAddTask }) {
    return (
        <HeaderContainer>
            <Title>Lista de tarefas</Title>
            <FormContainer>
                <InputItem
                    placeholder="Adicione uma nova tarefa"
                    value={taskTitle}
                    onChangeText={onTaskTextChange}
                />
                <ButtonItem onPress={onAddTask}>
                    <MaterialCommunityIcons
                        name="plus"
                        size={35}
                        color="#fff"
                    />
                </ButtonItem>
            </FormContainer>
        </HeaderContainer>
    )
}
