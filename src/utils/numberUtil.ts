export const withComma = (num: number) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
