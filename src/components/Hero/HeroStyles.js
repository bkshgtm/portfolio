import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  position: relative; /* Ensure that any future positioning of elements is relative to this section */
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
