import {TextInput, TouchableOpacity} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding: ${RFValue(8)}px;
    padding-bottom: ${getBottomSpace() + 10}px;
    border-top-width: ${RFValue(1)}px;
    background-color: ${({theme}) => theme.colors.TailWind.Gray[700]};
    border-color: ${({theme}) => theme.colors.TailWind.Gray[500]};
`;

export const Button = styled(TouchableOpacity)`
    padding: ${RFValue(4)}px;
    margin-left: ${RFValue(4)}px;
`;

export const MessageContainer = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const Input = styled(TextInput)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.TailWind.Gray[600]};
    border-radius: ${RFValue(12)}px;
    padding: ${RFValue(4)}px;
    padding-left: ${RFValue(12)}px;
`;

export const OptionContainer = styled.View`
    flex-direction: row;
`;
