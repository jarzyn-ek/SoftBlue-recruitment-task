const getTimeFromStringDate = (date: string): number => {
  return new Date(date).getTime();
};

export const isBefore = (
  dateAAsString: string,
  dateBAsString: string
): number => {
  return (
    getTimeFromStringDate(dateAAsString) - getTimeFromStringDate(dateBAsString)
  );
};
