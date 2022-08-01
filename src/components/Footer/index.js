import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';
import Button from '../Button';

export default class Footer extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme, handleSetPurpleTheme }) => (
          <Container>
            <span>JStack's Blog. Todos os direitos reservados.</span>
            <Button onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌞' : '🌚'}
            </Button>
            <Button onClick={handleSetPurpleTheme}>🟣</Button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }

}