import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const d = Dimensions.get('window');
const width = d.width * 0.75 + 'px';
const height = d.height * 0.5 + 'px';

export const Container = styled.View`
  width: ${width};
  height: ${height};
  border-radius: 48px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const ViewAvatar = styled.View`
  background: #999;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

export const NameUser = styled.Text`
  color: #222;
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const Separator = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.06);
`;

export const ViewNav = styled.View`
  background: #999;
`;

export const ViewAccount = styled.View`
  flex-direction: row;
`;

export const NavText = styled.Text`
  color: #222;
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
`;
