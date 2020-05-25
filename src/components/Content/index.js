import React from 'react';
import Icon from 'react-native-elements';

import {
  Container,
  ViewAvatar,
  Image,
  NameUser,
  Separator,
  ViewNav,
  ViewAccount,
  NavText,
} from './styles';

export default function Content() {
  return (
    <Container>
      <ViewAvatar>
        <Image
          source={{
            uri:
              'https://scontent.ffor28-1.fna.fbcdn.net/v/t1.0-9/53611087_1164523100397192_8475827846500057088_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeFocSviwWLnpK48QdTfmsFdKKO-YRMQJe0oo75hExAl7f8NnhSH71SqgbnjxA0kdHLp4p-Q4ERz1qwX_9wS6UxR&_nc_ohc=6xcvEfls5AMAX9JfMDP&_nc_ht=scontent.ffor28-1.fna&oh=10fd32782f89139c83c5f6547d025ff3&oe=5EF212AE',
          }}
        />
        <NameUser>Denison F Menezes</NameUser>
      </ViewAvatar>

      <Separator />

      <ViewNav>
        <ViewAccount>
          <Icon name="account-circle" type="material" size={30} color="#222" />
          <NavText>Minha conta</NavText>
        </ViewAccount>
      </ViewNav>
    </Container>
  );
}
