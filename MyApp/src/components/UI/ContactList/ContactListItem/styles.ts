import {Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    width: 100%;
    //justify-content: space-between;
    align-items: center;
    padding: ${RFValue(4)}px;
    background-color: ${({theme}) => theme.colors.white};
    margin-bottom: ${RFValue(2)}px;
`;

export const AvatarContainer = styled.View`
    display: flex;
    margin-right: ${RFValue(12)}px;
`;

export const AvatarImage = styled(Image)`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
`;

export const InfoContainer = styled.View`
    flex: 1;
`;

export const InfoName = styled.Text`
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-weight: 700;
    font-size: ${RFValue(14)}px;
`;

export const InfoDescription = styled.Text`
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-weight: 500;
    font-size: ${RFValue(12)}px;
`;

export const PendindMessageContainer = styled.View`
    display: flex;
    justify-content: flex-start;
    margin-right: ${RFValue(6)}px;
`;

export const PendingMessageBadge = styled.View`
    background-color: ${({theme}) => theme.colors.TailWind.Green[500]};
    padding: ${RFValue(2)}px ${RFValue(6)}px;
    border-radius: ${RFValue(12)}px;
`;

export const BadgeNumber = styled.Text`
    font-family: ${({theme}) => theme.fonts.LeagueSpartan};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.TailWind.Green[50]};
`;
