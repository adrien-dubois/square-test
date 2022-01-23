import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: var(--roboto-font);
    font-size: 2em;
  }
  h2 {
    font-family: var(--montserrat-font);
    font-size: 4em;
    margin-top: 0.5em;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2em;
    }
    h2 {
      font-size: 3.6em;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}