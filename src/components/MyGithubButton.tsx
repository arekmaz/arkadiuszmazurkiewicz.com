/** @jsx jsx */
import React from 'react';
import { ReactComponent as LogoSvg } from '../assets/github-logo.svg';
import { jsx, css } from '@emotion/core';

type MyGithubButtonProps = {};

export default function MyGithubButton({}: MyGithubButtonProps) {
  return (
    <a
      css={css`
        display: flex;
        border: 2px solid;
        padding: 5px;
        border-radius: 7px;
      `}
      href="https://github.com/arekmaz"
      role="button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoSvg {...{ height: '2rem', width: '2rem' }} />
      <span
        css={css`
          margin-left: 5px;
        `}
      >{`My GitHub page`}</span>
    </a>
  );
}
