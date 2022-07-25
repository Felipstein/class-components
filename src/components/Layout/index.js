import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, onSetPurpleTheme, selectedTheme }) {
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        onSetPurpleTheme={onSetPurpleTheme}
        selectedTheme={selectedTheme}
        />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        onSetPurpleTheme={onSetPurpleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
