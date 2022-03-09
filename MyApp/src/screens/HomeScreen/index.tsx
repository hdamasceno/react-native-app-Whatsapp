import React from 'react';
import {ContactList} from '../../components/UI/ContactList';

import {Container} from './styles';

export function HomeScreen() {
    return (
        <Container>
            <ContactList />
        </Container>
    );
}
