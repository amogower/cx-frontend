import styled from 'styled-components';

export const StyledSubeventHeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 25px;
  padding: 0;
  transition: margin 0.15s;

  button {
    transition: transform 0.15s;
    transform: translate(0px, 0px);
  }
`;

export const StyledSubeventTitle = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  line-height: 35px;
  font-size: 26px;
  font-family: inherit
  transform: translate(0px, 0px) translate(-50%, -50%) scale(1)
    translate(50%, 50%);
  transition: transform 0.15s;

  @media (min-width: 1024px) {
    margin: 0 10px 0 0;
    padding: 0 20px 0 0;
  }
`;
