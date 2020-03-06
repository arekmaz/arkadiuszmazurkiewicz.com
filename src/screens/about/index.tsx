/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Background from './Background';
import AboutContent from './AboutContent';

function App() {
  return (
    <div
      css={css`
        height: 100vh;
        max-height: 100vh;
      `}
    >
      <Background />
      <AboutContent />
    </div>
  );
}

export default App;
