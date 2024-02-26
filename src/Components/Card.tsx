import { styled } from 'goober';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = styled("div")`
    background-color: var(--theme-card-bg-color);
    border: 1px solid var(--theme-card-border-color);
    border: 1px solid var(--theme-card-border-color);
    border-radius: var(--theme-card-corner-radius);
    padding: 20px;
    max-width: 260px;
    min-height: 100px;
    margin: 0 auto;
  `;

export default function Card({ children }: Props): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  );
}
