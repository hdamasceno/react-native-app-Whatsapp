import React from 'react';
import {ContactProps} from '..';

import {
    Container,
    AvatarContainer,
    AvatarImage,
    InfoContainer,
    InfoName,
    InfoDescription,
    PendindMessageContainer,
    PendingMessageBadge,
    BadgeNumber,
} from './styles';

interface Props {
    contact: ContactProps;
}

export function ContactListItem({contact}: Props) {
    return (
        <Container>
            <AvatarContainer>
                <AvatarImage source={{uri: contact.avatarUrl}} />
            </AvatarContainer>
            <InfoContainer>
                <InfoName>{contact.name}</InfoName>
                <InfoDescription>{contact.description}</InfoDescription>
            </InfoContainer>
            {contact.pendinMessageCount > 0 && (
                <PendindMessageContainer>
                    <PendingMessageBadge>
                        <BadgeNumber>{contact.pendinMessageCount}</BadgeNumber>
                    </PendingMessageBadge>
                </PendindMessageContainer>
            )}
        </Container>
    );
}
