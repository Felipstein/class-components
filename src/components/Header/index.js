import React, { Component } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';
import Button from '../Button';

export default class Header extends Component {

  render() {

    return (
      <ThemeContext.Consumer>
        {
          ({ theme, handleToggleTheme, handleSetPurpleTheme }) => (
            <Container>
              <h1>JStack's Blog</h1>
              <Button onClick={handleToggleTheme}>
                {theme === 'dark' ? '🌞' : '🌚'}
              </Button>
              <Button onClick={handleSetPurpleTheme}>🟣</Button>
            </Container>
          )
        }
      </ThemeContext.Consumer> 
    );
  }

}