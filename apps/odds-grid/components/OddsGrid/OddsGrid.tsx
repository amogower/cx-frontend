import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  margin: 15px;
  padding: 15px;
  border: 4px dashed green;
  border-radius: 0.25rem;
`;

export const OddsGrid = () => {
  return (
    <StyledPage>
      <div>OddsGrid</div>
    </StyledPage>
  );
}
