import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Button from '../Button';

export default class Header extends Component {

  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
    onSetPurpleTheme: PropTypes.func.isRequired,
  }

  render() {
    const { onToggleTheme, onSetPurpleTheme, selectedTheme } = this.props;

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

}