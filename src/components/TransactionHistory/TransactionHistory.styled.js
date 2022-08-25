import styled from 'styled-components';

export const Wrapper = styled.section`
  width: ${p => p.theme.sizes[7]}px;
  margin-left: ${p => p.theme.space[13]};
  margin-right: ${p => p.theme.space[13]};
  padding: ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.lg};
  overflow: hidden;
  background-color: ${p => p.theme.colors.backgraund};
  box-shadow: ${p => p.theme.shadows[1]};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[8]}px;
  }
`;

export const History = styled.table`
  width: ${p => p.theme.sizes[6]}px;
  margin-left: ${p => p.theme.space[13]};
  margin-right: ${p => p.theme.space[13]};
  border: ${p => `${p.theme.borders.md} ${p.theme.colors.primary}`};
  border-collapse: collapse;
  text-transform: capitalize;
`;

export const Thead = styled.thead`
  height: ${p => p.theme.sizes[0]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  th {
    padding: ${p => p.theme.space[6]}px;
  }
`;

export const Tbody = styled.tbody`
  text-align: center;
  border: ${p => `${p.theme.borders.md} ${p.theme.colors.primary}`};

  td {
    padding: ${p => p.theme.space[6]}px;
  }

  td:not(:last-child) {
    border-right: ${p => `${p.theme.borders.md} ${p.theme.colors.primary}`};
  }

  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
