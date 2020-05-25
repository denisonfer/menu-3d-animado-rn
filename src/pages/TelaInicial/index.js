import React from 'react';
import { StyleSheet } from 'react-native';
import { withSpringTransition } from 'react-native-redash';
import { Value } from 'react-native-reanimated';

import { Container, ContainerProfile } from './styles';

import Screen from '../../components/Screen';
import Profile from '../../components/Profile';

export default function TelaInicial() {
  const open = new Value(0);
  const transition = withSpringTransition(open);

  return (
    <Container>
      <Screen {...{ open, transition }} />

      <ContainerProfile pointerEvents="box-none" style={styles.layer}>
        <Profile {...{ open, transition }} />
      </ContainerProfile>
    </Container>
  );
}

const styles = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFillObject,
  },
});
