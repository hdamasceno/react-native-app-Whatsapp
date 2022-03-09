import React from 'react';
import {FlatList} from 'react-native';
import {ContactListHeader} from './ContactListHeader';
import {ContactListItem} from './ContactListItem';
import {ContactListSearch} from './ContactListSearch';

import {Container} from './styles';

export interface ContactProps {
    id: string;
    name: string;
    description: string;
    avatarUrl?: string;
    pendinMessageCount: number;
}

export function ContactList() {
    const contatos: ContactProps[] = [
        {
            id: '1',
            name: 'Henry Lima',
            description: 'Estou na área!',
            avatarUrl: 'https://avatars.githubusercontent.com/u/4733294?v=4',
            pendinMessageCount: 1,
        },
        {
            id: '2',
            name: 'Neymar Jr.',
            description: 'nada...',
            avatarUrl:
                'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            pendinMessageCount: 0,
        },
        {
            id: '3',
            name: 'Maria Clara',
            description: 'De boa na lagoa',
            avatarUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            pendinMessageCount: 0,
        },
        {
            id: '4',
            name: 'Rivaldo',
            description: 'Estou na área!',
            avatarUrl:
                'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            pendinMessageCount: 0,
        },
        {
            id: '5',
            name: 'Messi ?',
            description: 'nada...',
            avatarUrl:
                'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            pendinMessageCount: 24,
        },
        {
            id: '6',
            name: '+55 32 9 9116 2020',
            description: 'Nro. sem identificação',
            avatarUrl:
                'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            pendinMessageCount: 0,
        },
    ];

    return (
        <Container>
            <ContactListHeader />
            <ContactListSearch />

            <FlatList
                data={contatos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ContactListItem contact={item} />}
                contentContainerStyle={{paddingBottom: 100}}
                showsVerticalScrollIndicator={false}
                style={{width: '100%', padding: 2}}
            />
        </Container>
    );
}
