import React from 'react';
import Header from '../../components/Header';
import Tabs from '../../pages/Tab';
import {
  Container
} from './styles';
export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
