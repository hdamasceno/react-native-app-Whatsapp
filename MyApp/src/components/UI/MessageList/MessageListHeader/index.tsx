import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import theme from '../../../../global/theme';
import {ContactProps} from '../../ContactList';

import {
    AudioCallButton,
    AvatarContainer,
    AvatarImage,
    BackButton,
    ContactInfoContainer,
    ContactInfoDescription,
    ContactInfoName,
    Container,
    OperationContainer,
    VideoCallButton,
} from './styles';

interface Props {
    contact: ContactProps;
}

export function MessageListHeader({contact}: Props) {
    return (
        <Container>
            <BackButton>
                <IconEntypo
                    name={'chevron-left'}
                    size={28}
                    color={theme.colors.TailWind.Blue[500]}
                />
            </BackButton>
            <AvatarContainer>
                <AvatarImage source={{uri: contact.avatarUrl}} />
            </AvatarContainer>
            <ContactInfoContainer>
                <ContactInfoName>HENRY</ContactInfoName>
                <ContactInfoDescription>
                    Descricao do contato
                </ContactInfoDescription>
            </ContactInfoContainer>
            <OperationContainer>
                <VideoCallButton>
                    <IconEntypo
                        name={'video-camera'}
                        size={28}
                        color={theme.colors.TailWind.Blue[500]}
                    />
                </VideoCallButton>
                <AudioCallButton>
                    <IconEntypo
                        name={'phone'}
                        size={28}
                        color={theme.colors.TailWind.Blue[500]}
                    />
                </AudioCallButton>
            </OperationContainer>
        </Container>
    );
}
