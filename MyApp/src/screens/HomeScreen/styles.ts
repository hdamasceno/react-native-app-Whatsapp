import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: ${({theme}) => theme.colors.TailWind.Green[50]};
    margin-top: ${getStatusBarHeight()}px;
`;
