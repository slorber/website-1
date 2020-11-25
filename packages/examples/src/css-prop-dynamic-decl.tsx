import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

export const EmphasisText = (props) => (
  <span
    css={{
      color: props.primary ? '#00B8D9' : '#36B37E',
      fontWeight: 600,
    }}>
    {props.children}
  </span>
);
