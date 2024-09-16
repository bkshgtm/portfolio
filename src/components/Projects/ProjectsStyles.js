// components/ProjectsStyles.js
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`;

export const ProjectCard = styled.div`
  background: #0F1624;
  border-radius: 10px;
  overflow: hidden;
  cursor: ${props => props.className === 'hover-effect' ? 'pointer' : 'default'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &.hover-effect:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Title = styled.h4`
  margin: 10px 15px;
  font-size: 18px;
  color: #fff;
`;

export const Description = styled.p`
  margin: 0 15px 15px;
  font-size: 14px;
  color: #e4e6e7;
`;
