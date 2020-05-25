import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: blue;
`;
