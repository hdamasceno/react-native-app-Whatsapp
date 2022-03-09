import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Svg from 'react-native-svg';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: ${RFValue(60)}px;
    padding: ${RFValue(9)}px;
    background-color: ${({theme}) => theme.colors.white};
`;

export const Input = styled(TextInput)`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.TailWind.Gray[100]};
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-size: ${RFValue(12)}px;
    border-radius: ${RFValue(8)}px;
    padding-left: ${RFValue(50)}px;
    z-index: 0;
`;

export const InputIcon = styled(Svg)`
    position: absolute;
    z-index: 1;
    top: ${RFValue(16)}px;
    left: ${RFValue(24)}px;
`;
