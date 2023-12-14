import { TableRow, TableHead as MuiTableHead, TableCell } from '@mui/material';
import { FC } from 'react';

interface ITableHead {
  daysOfMonth: string[];
}

const TableHead: FC<ITableHead> = ({ daysOfMonth }) => {
  return (
    <MuiTableHead sx={{ border: 'none' }}>
      <TableRow sx={{ p: 0, border: 'none' }}>
        <TableCell
          sx={{
            fontSize: '10px',
            p: 0,
            lineHeight: 0.8,
            letterSpacing: 0,
            width: '20px',
          }}
        />
        {daysOfMonth.map((day) => (
          <TableCell
            align="center"
            sx={{ fontSize: '10px', p: 0, lineHeight: 1, letterSpacing: 0 }}
            padding="none"
            colSpan={4}
            key={day}
          >
            {day}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
