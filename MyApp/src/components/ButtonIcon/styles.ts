import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    display: flex;
    align-items: center;
    padding: ${RFValue(8)}px;
    padding-top: ${RFValue(12)}px;
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    background-color: ${({theme}) => theme.colors.TailWind.Green[200]};
    border-radius: ${RFValue(8)}px;
`;
