/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import MyGithubButton from '../../components/MyGithubButton';
import MyLinkedinButton from '../../components/MyLinkedinButton';
import Space from '../../components/Space';

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
        <Space y={5} />
        <MyLinkedinButton />
      </section>
    </main>
  );
}
