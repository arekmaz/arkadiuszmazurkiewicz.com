/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ReactComponent as LogoSvg } from '../assets/linkedin-logo.svg';

type MyLinkedinButtProps = {};

export default function MyLinkedinButt(
  props: MyLinkedinButtProps,
) {
  return (
    <a
      css={css`
        display: flex;
        padding: 5px;
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
      >{`My Linkedin page`}</span>
    </a>
  );
}
