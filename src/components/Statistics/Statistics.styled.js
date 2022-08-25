import styled from 'styled-components';

export const Wrapper = styled.section`
  width: ${p => p.theme.sizes[7]}px;
  margin-left: ${p => p.theme.space[13]};
  margin-right: ${p => p.theme.space[13]};
  padding: ${p => `${p.theme.space[7]}px ${p.theme.space[0]}`};
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
  background-color: ${p => p.theme.colors.backgraund};
  box-shadow: ${p => p.theme.shadows[1]};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[8]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[7]}px;
  padding: ${p => `${p.theme.space[4]}px ${p.theme.space[0]}`};
  border-top: ${p => `${p.theme.borders.md} ${p.theme.colors.secondary}`};
  border-bottom: ${p => `${p.theme.borders.md} ${p.theme.colors.secondary}`};

  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  width: ${p => p.theme.sizes[6]}px;
  margin-left: ${p => p.theme.space[13]};
  margin-right: ${p => p.theme.space[13]};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.sizes[2]}px;
  height: ${p => p.theme.sizes[1]}px;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${P => P.theme.space[6]}px;
`;

export const Percentage = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
