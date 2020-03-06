/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

type SpaceProps =
  | {
      x: number;
      y?: number;
    }
  | {
      y: number;
      x?: number;
    };

export default function Space(props: SpaceProps) {
  const { x, y } = props;
  return (
    <div
      css={css`
        width: ${getWidth(x, y)};
        height: ${getHeight(x, y)};
      `}
    ></div>
  );
}

function getWidth(x?: number, y?: number) {
  if ((x && y) || x) {
    return `${x}px`;
  }
  if (y) {
    return '100%';
  }
  return '0px';
}

function getHeight(x?: number, y?: number) {
  if ((x && y) || y) {
    return `${y}px`;
  }
  if (x) {
    return '100%';
  }
  return '0px';
}
