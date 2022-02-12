//Styled components
import styled from "styled-components";

export const StyledSection = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
