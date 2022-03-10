import React from 'react';
import {ContactProps} from '../../ContactList';

import {Container, MessageContainer, MessageText} from './styles';

export interface MessageProps {
    id: string;
    cadastradoDataHora: string;
    contactId: string;
    contact: ContactProps;
    text?: string;
    fileUrl?: string;
    type: 'RECEIVED' | 'SENT' | undefined;
}

interface Props {
    message: MessageProps;
}

export function MessageListItem({message}: Props) {
    return (
        <Container>
            <MessageContainer>
                <MessageText>{message.text || ''}</MessageText>
            </MessageContainer>
        </Container>
    );
}
