import { ActivityIndicator } from 'react-native'
import { LoadingContainer } from './styles'

export function Loading() {
    return (
        <LoadingContainer>
            <ActivityIndicator size={50} color="#FF9B40" />
        </LoadingContainer>
    )
}
