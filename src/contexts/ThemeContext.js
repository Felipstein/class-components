import React, { createContext, useState  } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {

  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }))
  }

  handleSetPurpleTheme = () => {
    this.setState({ theme: 'purple' });
  }

  render() {

    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
          handleSetPurpleTheme: this.handleSetPurpleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );

  }

}