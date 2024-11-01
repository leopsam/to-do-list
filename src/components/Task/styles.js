import styled from 'styled-components/native'

export const TaskContainer = styled.View`
    margin: 8px 15px;
    padding: 0px 25px;
    height: 60px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-color: #d3d3d3;
    border-width: 1px;
    background-color: ${({ isDone }) => (isDone ? '#d0d0d0' : '#fff')};
`
export const ContainerText = styled.View`
    width: 75%;
    height: 80%;
    justify-content: center;
    align-items: flex-start;
`
export const TitleTask = styled.Text`
    text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
    color: #1b1b1b;
    font-family: Roboto_400Regular;
    font-size: 14px;
`
