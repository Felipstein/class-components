import React from 'react';

import { Container } from './styles';
import Button from '../Button';

export default function Header({ onToggleTheme, onSetPurpleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <Button onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </Button>
      <Button onClick={onSetPurpleTheme}>🟣</Button>
    </Container>
  );
}