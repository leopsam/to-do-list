import styled from 'styled-components/native'

export const Title = styled.Text`
    color: white;
    font-family: Roboto_700Bold;
    font-size: 26px;
`
export const HeaderContainer = styled.View`
    background-color: #1f6b5e;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 190px;
    padding-top: 60px;
    margin-bottom: 60px;
    position: relative;
`
export const FormContainer = styled.View`
    position: absolute;
    bottom: -26px;
    height: 54px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const InputItem = styled.TextInput`
    height: 50px;
    width: 75%;
    background-color: white;
    border-radius: 50px;
    padding: 16px;
    margin-right: 6px;
    font-size: 16px;
    border-color: #d3d3d3;
    border-width: 1px;
`
export const ButtonItem = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ff9b40;
    border-radius: 50px;
`
