import { Table, TableContainer, Paper } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import { selectorData } from '../../store/slices/data';
import { memo } from 'react';
import TableHead from './TableHead';
import Body from './Body';
import { GithubGraphCard } from '../UI';
import { createCalendarGrid, getDataMonths } from '../../helpers/date';

const DataTable = memo(() => {
  const { data } = useAppSelector((state) => selectorData(state));

  if (!Object.keys(data).length) {
    return <h1>No Items</h1>;
  }

  const array = createCalendarGrid(data);

  const months = getDataMonths(array);

  return (
    <TableContainer
      sx={{ pt: 3, px: 1, pb: 1, border: '1px solid' }}
      component={Paper}
    >
      <Table
        color="inherit"
        sx={{ borderCollapse: 'separate', borderSpacing: '1px' }}
      >
        <TableHead daysOfMonth={months} />
        <Body array={array} />
      </Table>
      <GithubGraphCard
        list={[
          { color: '#EDEDED', id: 1 },
          { color: '#acd5f2', id: 2 },
          { color: '#7fa8c9', id: 3 },
          { color: '#254e77', id: 4 },
        ]}
      />
    </TableContainer>
  );
});

export default DataTable;
