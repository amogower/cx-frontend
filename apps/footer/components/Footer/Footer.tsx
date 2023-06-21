import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin: 15px;
  padding: 15px;
  border: 4px dashed darkblue;
  border-radius: 0.25rem;
`;

export const Footer = () => {
  return (
    <StyledPage>
      <div>Footer</div>
    </StyledPage>
  );
};
