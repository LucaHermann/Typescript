export const dateStringToDate = (dateString: string): Date => {
  const splitedDate = dateString
    .split("/")
    .map((value: string): number => {
      return parseInt(value);
    });
  return new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
};

export interface IDataReader {
  read(): void,
  data: string[][]
}