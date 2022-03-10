import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    padding: ${RFValue(10)}px;
`;

export const MessageContainer = styled.View`
    width: 60%;
    padding: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: ${RFValue(10)}px;
`;

export const MessageText = styled.Text`
    color: ${({theme}) => theme.colors.TailWind.Gray[800]};
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-size: ${RFValue(14)}px;
`;

export const MessageDataHora = styled.Text``;
