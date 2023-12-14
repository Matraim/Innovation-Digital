import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from '@mui/material';
import { chartBackground, formatDate } from '../../helpers/date';
import { Month } from '../../types/data';
import { FC } from 'react';

interface ITableBodyProps {
  array: Month[][];
}

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const StyledTableCell = styled(TableCell)`
  padding: 0;
  height: 10px;
  width: 15px;
  line-height: 0.8;
  border: none;
  font-size: 10px;
`;

const StyledContributionsTyporaphy = styled(Typography)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Body: FC<ITableBodyProps> = ({ array }) => {
  return (
    <TableBody>
      {array.map((el, i) => (
        <TableRow key={i}>
          <StyledTableCell align="center">
            {daysOfWeek[i % 2 === 0 ? i : -1]}
          </StyledTableCell>
          {el.map((sub) => (
            <StyledTooltip
              key={sub.date}
              title={
                <Stack>
                  <StyledContributionsTyporaphy
                    variant="body2"
                    textAlign="center"
                  >
                    {sub.value} contributions
                  </StyledContributionsTyporaphy>

                  <StyledContributionsTyporaphy
                    variant="body2"
                    fontSize="10px"
                    color="#7C7C7C"
                  >
                    {formatDate(sub.date)}
                  </StyledContributionsTyporaphy>
                </Stack>
              }
              placement="top"
              arrow
              disableInteractive
              describeChild={false}
            >
              <StyledTableCell
                align="center"
                padding="none"
                sx={{
                  width: '10px',
                  ...chartBackground(sub.value),
                }}
              />
            </StyledTooltip>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
