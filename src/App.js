import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {

  state = {
    theme: 'dark'
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({ 
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  }

  handleSetPurpleTheme = () => {
    this.setState({ theme: 'purple' });
  }

  render() {
    const { theme } = this.state;

    console.debug('<App /> renderizou');

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
