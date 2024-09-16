import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 3rem 0;

  @media ${props => props.theme.breakpoints.md} {
    gap: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
`;

export const Card = styled.div`
  background: #1f1f1f;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 250px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const CardIcon = styled.div`
  margin-bottom: 20px;
  color: #ffffff;

  @media ${props => props.theme.breakpoints.md} {
    margin-bottom: 15px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 10px;
  }
`;

export const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const CardParagraph = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;
