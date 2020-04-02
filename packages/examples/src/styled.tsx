import { styled } from '@compiled/css-in-js';

export const Heading = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 52px;
`;