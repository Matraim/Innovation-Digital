import { DateData, Month } from '../types/data';

function getMonthName(monthNumber: number) {
  const date = new Date(2000, monthNumber, 1);
  const monthName = date.toLocaleString('ru-RU', { month: 'short' });
  return monthName;
}

export const createCalendarGrid = (date: DateData): Month[][] => {
  const arrayWeek = [[], [], [], [], [], [], []];

  const newDate = fillMissingDates(date);

  const array = newDate.reduce((acc, curr, i) => {
    const day = new Date(curr.date).getDay();

    if (i === 0 && day > 1) {
      const dummyArray = [...Array(day - 1)];

      const reversedIndexes = dummyArray.map((_, i) => i + 1).reverse();

      reversedIndexes.forEach((index, i) => {
        const dayBefore = new Date(
          new Date(curr.date).getTime() - 24 * index * 60 * 60 * 1000
        )
          .toISOString()
          .split('T')[0];

        acc[i]?.push({ date: dayBefore, value: 0 } as never);
      });
    }

    acc[day === 0 ? 6 : day - 1]?.push({ ...curr } as never);

    return acc;
  }, arrayWeek);

  return array;
};

export function fillMissingDates(dataArray: DateData) {
  const startDate = new Date('2022-10-26');
  const endDate = new Date('2023-10-25');
  const filledData = [];

  const array = Object.keys(dataArray).map((el) => ({
    date: el,
    value: dataArray[el],
  }));

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateString = date.toISOString().split('T')[0];

    const existingData = array.find((item) => item.date === dateString);
    if (existingData) {
      filledData.push(existingData);
    } else {
      filledData.push({ date: dateString, value: 0 });
    }
  }

  return filledData;
}

export const getDataMonths = (
  calendarGrid: Month[][]
): { month: string; length: number }[] => {
  const monthsNestedArray: number[][] = [];

  calendarGrid.forEach((week) => {
    const weekMonths: number[] = [];

    week.forEach((day) => {
      const month = new Date(day.date).getMonth();

      weekMonths.push(month);
    });

    monthsNestedArray.push(weekMonths);
  });

  const numbers = monthsNestedArray[0];

  const monthsArray: { value: number; index: number }[][] = [];

  for (let i = 0; i < numbers.length; i++) {
    const monthNumber = numbers[i];
    const existingArrayIndex = monthsArray.findIndex((arr) =>
      arr.some((item) => item.value === monthNumber && item.index + 1 === i)
    );

    if (existingArrayIndex !== -1) {
      if (monthsArray[existingArrayIndex].some((a) => a.index + 1 === i)) {
        monthsArray[existingArrayIndex].push({
          value: monthNumber,
          index: i,
        });
      }
    } else {
      monthsArray.push([{ value: monthNumber, index: i }]);
    }
  }

  const monthsArrayString = monthsArray.map((el) => ({
    month: getMonthName(el[0].value),
    length: el.length,
  }));

  console.log(monthsArrayString);

  return monthsArrayString;
};

export const chartBackground = (value: number) => {
  const numericValue = parseFloat(String(value));
  if (isNaN(numericValue) || numericValue <= 0) {
    return { background: '#f5f5f5' };
  }

  if (value >= 1 && value <= 9) {
    return { background: '#ACD5F2' };
  }

  if (value >= 10 && value <= 19) {
    return { background: '#7FA8C9' };
  }

  if (value >= 20 && value <= 29) {
    return { background: '#527BA0' };
  }

  return {
    background: `#254E77`,
  };
};

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);

  return formattedDate;
};
