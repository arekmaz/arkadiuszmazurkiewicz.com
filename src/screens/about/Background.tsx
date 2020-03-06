/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const SVG = () => {
  return (
    <div
      css={css`
        position: fixed;
        z-index: -5;
        height: 100vh;
        width: 100vw;
        pointer-events: none;
      `}
    >
      <div
        css={css`
          display: flex;
          position: absolute;
          justify-content: center;
          width: 100%;
          bottom: -4px;
        `}
      >
        <svg
          width="146"
          height="132"
          viewBox="0 0 146 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="-20"
              y="-20"
              width="166"
              height="152"
            >
              <rect
                x="-20"
                y="-20"
                width="166"
                height="152"
                fill="#4A7040"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M341.71 239.08C335.23 258.46 253.547 248.615 159.267 217.09C64.9864 185.566 -6.18989 144.3 0.290152 124.92C6.77019 105.54 88.4527 115.385 182.733 146.91C277.014 178.434 348.19 219.7 341.71 239.08Z"
                fill="#4A7040"
                fillOpacity="0.96"
              />
              <path
                d="M157.215 149.384C205.019 221.393 235.567 285.216 225.444 291.936C215.321 298.656 168.362 245.729 120.558 173.72C72.7531 101.711 42.2061 37.8879 52.3288 31.1678C62.4515 24.4477 109.411 77.375 157.215 149.384Z"
                fill="#4A7040"
                fillOpacity="0.96"
              />
              <path
                d="M171 169.5C171 263.112 159.807 339 146 339C132.193 339 121 263.112 121 169.5C121 75.8877 132.193 0 146 0C159.807 0 171 75.8877 171 169.5Z"
                fill="#4A7040"
                fillOpacity="0.96"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="146" height="132" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div
          css={css`
            transform: rotateY(-180deg);
          `}
        >
          <svg
            width="146"
            height="132"
            viewBox="0 0 146 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="-20"
                y="-20"
                width="166"
                height="152"
              >
                <rect
                  x="-20"
                  y="-20"
                  width="166"
                  height="152"
                  fill="#7ED967"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M341.71 239.08C335.23 258.46 253.547 248.615 159.267 217.09C64.9864 185.566 -6.18989 144.3 0.290152 124.92C6.77019 105.54 88.4527 115.385 182.733 146.91C277.014 178.434 348.19 219.7 341.71 239.08Z"
                  fill="#7ED967"
                  fillOpacity="0.96"
                />
                <path
                  d="M157.215 149.384C205.019 221.393 235.567 285.216 225.444 291.936C215.321 298.656 168.362 245.729 120.558 173.72C72.7531 101.711 42.2061 37.8879 52.3288 31.1678C62.4515 24.4477 109.411 77.375 157.215 149.384Z"
                  fill="#7ED967"
                  fillOpacity="0.96"
                />
                <path
                  d="M171 169.5C171 263.112 159.807 339 146 339C132.193 339 121 263.112 121 169.5C121 75.8877 132.193 0 146 0C159.807 0 171 75.8877 171 169.5Z"
                  fill="#7ED967"
                  fillOpacity="0.96"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="146"
                  height="132"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default SVG;
