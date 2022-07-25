import React from 'react';

import { Container } from './styles';
import Button from '../Button';

export default function Footer({ onToggleTheme, onSetPurpleTheme, selectedTheme }) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <Button onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </Button>
      <Button onClick={onSetPurpleTheme}>🟣</Button>
    </Container>
  );
}