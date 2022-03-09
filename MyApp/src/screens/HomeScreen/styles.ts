import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: ${({theme}) => theme.colors.TailWind.Green[50]};
`;
