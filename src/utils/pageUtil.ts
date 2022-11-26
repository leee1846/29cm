interface IGetPager {
  currentPage: number;
  pagePerBundle: number;
  totalPages: number;
}
export const getPager = ({ currentPage, pagePerBundle, totalPages }: IGetPager) => {
  const startPage = Math.floor((currentPage - 1) / pagePerBundle) * pagePerBundle + 1;
  let endPage = Math.floor((currentPage - 1) / pagePerBundle + 1) * pagePerBundle;

  if (endPage > totalPages) {
    endPage = totalPages;
  }

  // @ts-ignore
  const pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);

  return {
    startPage,
    endPage,
    pages,
  };
};
