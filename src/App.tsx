/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Background from './Background';

function App() {
  return (
    <div
      css={css`
        height: 100vh;
        max-height: 100vh;
        overflow: hidden;
      `}
    >
      <Background />
      <main
        css={css`
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <section
          css={css`
            display: flex;
            flex-flow: column;
            text-align: center;
            justify-content: space-evenly;
            align-items: center;
            font-size: 2rem;
          `}
        >
          <h1>Arkadiusz Mazurkiewicz</h1>
          <h3>
            {`This is my personal Website`}
            <br /> {`⋯work in progress⋯`}
          </h3>
          <a href="https://github.com/arekmaz">
            {`My Github page`}
          </a>
          <a href="https://www.linkedin.com/in/arkadiusz-mazurkiewicz-6a6b14120/">
            {`My Linkedin page`}
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
