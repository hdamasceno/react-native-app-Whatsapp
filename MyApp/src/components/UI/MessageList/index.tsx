import React from 'react';
import {FlatList} from 'react-native';
import {ContactProps} from '../ContactList';
import {MessageListFooter} from './MessageListFooter';
import {MessageListHeader} from './MessageListHeader';
import {MessageListItem, MessageProps} from './MessageListItem';

import {Container} from './styles';

export function MessageList() {
    const contact = {
        id: '1',
        name: 'Henry Lima',
        description: 'Estou na área!',
        avatarUrl: 'https://avatars.githubusercontent.com/u/4733294?v=4',
        pendinMessageCount: 1,
    } as ContactProps;

    const messages: MessageProps[] = [
        {
            id: '1',
            cadastradoDataHora: '2022-03-04 08:30:13',
            type: 'RECEIVED',
            contactId: '1',
            contact: {
                id: '1',
                name: 'Henry Lima',
                description: 'Estou na área!',
                avatarUrl:
                    'https://avatars.githubusercontent.com/u/4733294?v=4',
                pendinMessageCount: 1,
            },
        },
    ];

    return (
        <Container>
            <MessageListHeader contact={contact} />

            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MessageListItem message={item} />}
                contentContainerStyle={{paddingBottom: 100}}
                showsVerticalScrollIndicator={false}
                style={{width: '100%', padding: 2}}
            />

            <MessageListFooter />
        </Container>
    );
}
