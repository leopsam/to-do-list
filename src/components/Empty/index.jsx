import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { EmptyContainer, EmptyText } from './styles'

export function Empty() {
    return (
        <EmptyContainer>
            <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={100}
                color="#8f8f8f"
            />
            <EmptyText>Nenhuma tarefa cadastrada</EmptyText>
        </EmptyContainer>
    )
}
