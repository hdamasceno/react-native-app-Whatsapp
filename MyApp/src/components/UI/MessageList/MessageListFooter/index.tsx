import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAW from 'react-native-vector-icons/FontAwesome5';
import theme from '../../../../global/theme';

import {
    Container,
    Button,
    MessageContainer,
    Input,
    OptionContainer,
} from './styles';

export function MessageListFooter() {
    return (
        <Container>
            <Button>
                <IconEntypo
                    name={'plus'}
                    size={28}
                    color={theme.colors.TailWind.Blue[500]}
                />
            </Button>
            <MessageContainer>
                <Input />
            </MessageContainer>
            <OptionContainer>
                <Button>
                    <IconFontAW
                        name={'dollar-sign'}
                        size={28}
                        color={theme.colors.TailWind.Blue[500]}
                    />
                </Button>
                <Button>
                    <IconEntypo
                        name={'camera'}
                        size={28}
                        color={theme.colors.TailWind.Blue[500]}
                    />
                </Button>
                <Button>
                    <IconEntypo
                        name={'mic'}
                        size={28}
                        color={theme.colors.TailWind.Blue[500]}
                    />
                </Button>
            </OptionContainer>
        </Container>
    );
}
