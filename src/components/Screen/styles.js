import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f6f5f9;
`;
