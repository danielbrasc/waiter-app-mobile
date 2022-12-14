import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { isAndroid } from '../Utils/isAndroid';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px 0 24px;
`;

export const FooterContainer = styled.SafeAreaView`
`;
