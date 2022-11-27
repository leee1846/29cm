const qs = require('query-string');

export const queryStringToObj = <T>(queryString: string): T | { [p: string]: string } => {
  return Object.fromEntries(new URLSearchParams(queryString));
};

export const objectToQueryString = (obj: { [key: string]: string | number | boolean }) => {
  return qs.stringify(obj);
};
