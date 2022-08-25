import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${p => p.theme.sizes[3]}px;
  margin-left: ${p => p.theme.space[13]};
  margin-right: ${p => p.theme.space[13]};
  margin-bottom: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primary};
`;

export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes.sm};
  color: ${p => p.theme.colors.primary}; ;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: ${p => `${p.theme.borders.normal} ${p.theme.colors.primary}`};
  border-bottom-right-radius: ${p => p.theme.radii.md};
  border-bottom-left-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.secondary};

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;

    width: 100%;
  }

  > li:not(:last-child) {
    border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.primary}`};
  }
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.primary};
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
