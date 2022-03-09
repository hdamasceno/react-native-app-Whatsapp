import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: ${({theme}) => theme.colors.TailWind.Gray[700]};
    padding-top: ${getStatusBarHeight() + 10}px;
`;

export const BackButton = styled(TouchableOpacity)`
    padding: ${RFValue(8)}px;
`;

export const AvatarContainer = styled.View``;

export const AvatarImage = styled(Image)`
    width: ${RFValue(24)}px;
    height: ${RFValue(24)}px;
    border-radius: ${RFValue(12)}px;
    margin-right: ${RFValue(8)}px;
`;

export const ContactInfoContainer = styled.View`
    flex: 1;
`;

export const ContactInfoName = styled.Text`
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-weight: 700;
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.white};
`;

export const ContactInfoDescription = styled.Text`
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-weight: 500;
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.TailWind.Gray[400]};
`;

export const OperationContainer = styled.View`
    flex-direction: row;
`;

export const VideoCallButton = styled(TouchableOpacity)`
    padding: ${RFValue(4)}px;
`;

export const AudioCallButton = styled(TouchableOpacity)`
    padding: ${RFValue(4)}px;
`;
