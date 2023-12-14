import { TableRow, TableHead as MuiTableHead, TableCell } from '@mui/material';
import { FC } from 'react';

interface ITableHead {
  daysOfMonth: { month: string; length: number }[];
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
        {daysOfMonth.map((day, i) => (
          <TableCell
            align="center"
            sx={{ fontSize: '10px', p: 0, lineHeight: 1, letterSpacing: 0 }}
            padding="none"
            colSpan={day.length}
            key={i}
          >
            {day.month}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
