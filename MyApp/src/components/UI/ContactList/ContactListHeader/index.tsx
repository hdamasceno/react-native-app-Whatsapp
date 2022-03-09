import React, {useState} from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import theme from '../../../../global/theme';

import {
    Container,
    HeaderAvatarContainer,
    HeaderOptionsContainer,
    HeaderOptionsContainerStatusButton,
    HeaderOptionsContainerNewMessageButton,
    HeaderOptionsContainerOptionButton,
} from './styles';

export function ContactListHeader() {
    const [avatarUrl] = useState(
        'https://avatars.githubusercontent.com/u/4733294?v=4',
    );

    return (
        <Container>
            <HeaderAvatarContainer
                source={{
                    uri: avatarUrl,
                }}
            />
            <HeaderOptionsContainer>
                <HeaderOptionsContainerStatusButton>
                    <IconEntypo
                        name={'info-with-circle'}
                        size={28}
                        color={theme.colors.TailWind.Gray[500]}
                    />
                </HeaderOptionsContainerStatusButton>
                <HeaderOptionsContainerNewMessageButton>
                    <IconEntypo
                        name={'new-message'}
                        size={28}
                        color={theme.colors.TailWind.Gray[500]}
                    />
                </HeaderOptionsContainerNewMessageButton>
                <HeaderOptionsContainerOptionButton>
                    <IconEntypo
                        name={'dots-three-vertical'}
                        size={28}
                        color={theme.colors.TailWind.Gray[500]}
                    />
                </HeaderOptionsContainerOptionButton>
            </HeaderOptionsContainer>
        </Container>
    );
}
