import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(8)}px;
    margin-top: ${RFValue(8)}px;
    background-color: ${({theme}) => theme.colors.TailWind.Gray[100]};
`;

export const HeaderAvatarContainer = styled(Image)`
    display: flex;
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: ${RFValue(24)}px;
`;

export const HeaderOptionsContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HeaderOptionsContainerStatusButton = styled(TouchableOpacity)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    margin-right: ${RFValue(2)}px;
`;

export const HeaderOptionsContainerNewMessageButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`;

export const HeaderOptionsContainerOptionButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`;
