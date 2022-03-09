import React from 'react';
import {MessageList} from '../../components/UI/MessageList';

import {Container} from './styles';

export function HomeScreen() {
    return (
        <Container>
            <MessageList />
        </Container>
    );
}
