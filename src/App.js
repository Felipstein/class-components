import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    }

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
    this.handleSetPurpleTheme = this.handleSetPurpleTheme.bind(this);
  }

  handleToggleTheme() {
    this.setState(prevState => ({ 
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  }

  handleSetPurpleTheme() {
    this.setState({ theme: 'purple' });
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToggleTheme}
          onSetPurpleTheme={this.handleSetPurpleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }

}

export default App;
