import styled from 'styled-components';

export const List = styled.ul`
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

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: ${p => p.theme.sizes[5]}px;
  min-height: ${p => p.theme.sizes[1]}px;
  margin: ${p => `${p.theme.space[0]} ${p.theme.space[13]}`};
  padding: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows[0]};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[6]}px;
  }
`;

export const Status = styled.span`
  position: absolute;
  top: ${p => p.theme.space[5]}px;
  right: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes[0]}px;
  height: ${p => p.theme.sizes[0]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ isOnline, theme }) =>
    isOnline ? theme.colors.online : theme.colors.ofline};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.sizes[1]}px;
  margin-right: ${p => p.theme.space[6]}px;

  border-radius: ${p => p.theme.radii.md};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
