import React from 'react';
import { IPage } from '@interfaces/common/page';
import { getPager } from '@utils/pageUtil';
import * as S from './Pagination.style';

interface IPagination {
  pageData: IPage;
  pagePerBundle: number;
}
const Pagination = ({ pageData, pagePerBundle }: IPagination) => {
  const { currentPage, totalPages, hasNext } = pageData;
  const pager = getPager({
    currentPage,
    pagePerBundle,
    totalPages,
  });

  const onClickPrev = () => {
    if (currentPage > 1) {
      console.log(currentPage);
    }
  };

  const onClickNext = () => {
    if (hasNext) {
      console.log(hasNext);
    }
  };
  return (
    <S.Pagination>
      <button type="button" onClick={onClickPrev}>
        〈
      </button>
      {pager.pages.map(page => (
        <S.Page type="button" active={currentPage === page}>
          {page}
        </S.Page>
      ))}
      <button type="button" onClick={onClickNext}>
        〉
      </button>
    </S.Pagination>
  );
};

export default Pagination;
