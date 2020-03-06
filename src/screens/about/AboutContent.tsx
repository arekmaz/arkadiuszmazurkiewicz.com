/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import MyGithubButton from '../../components/MyGithubButton';

export default function AboutContent() {
  return (
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
        <MyGithubButton />
        <a href="https://www.linkedin.com/in/arkadiusz-mazurkiewicz-6a6b14120/">
          {`My Linkedin page`}
        </a>
      </section>
    </main>
  );
}
