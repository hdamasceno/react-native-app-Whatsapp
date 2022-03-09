import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container} from './styles';

interface Props {
    iconName: string;
}

export function ButtonIcon({iconName}: Props) {
    return (
        <Container>
            <Icon name={iconName} size={RFValue(22)} />
        </Container>
    );
}
