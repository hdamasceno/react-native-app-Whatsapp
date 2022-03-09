import React from 'react';
import IconEntypo from 'react-native-vector-icons/FontAwesome';
import theme from '../../../../global/theme';

import {Container, Input, InputIcon} from './styles';

export function ContactListSearch() {
    return (
        <Container>
            <InputIcon>
                <IconEntypo
                    name={'search'}
                    size={28}
                    color={theme.colors.TailWind.Gray[500]}
                />
            </InputIcon>
            <Input placeholder="Pesquisar ou começar uma nova conversa" />
        </Container>
    );
}
