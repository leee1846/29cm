import React from 'react';
import { IPage } from '@interfaces/common/page';
import { getPager } from '@utils/pageUtil';
import { useLocation, useNavigate } from 'react-router-dom';
import { objectToQueryString, queryStringToObj } from '@utils/stringUtil';
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  const queryStringObj = queryStringToObj<any>(location.search);
  const navigate = useNavigate();
  const onClickPrev = () => {
    if (currentPage > 1) {
      const queryString = objectToQueryString({ ...queryStringObj, page: currentPage - 1 });
      navigate(`/products?${queryString}`);
      scrollToTop();
    }
  };

  const onClickNext = () => {
    if (hasNext) {
      const queryString = objectToQueryString({ ...queryStringObj, page: currentPage + 1 });
      navigate(`/products?${queryString}`);
      scrollToTop();
    }
  };

  const onClickPage = (page: number) => {
    const queryString = objectToQueryString({ ...queryStringObj, page });
    navigate(`/products?${queryString}`);
    scrollToTop();
  };
  return (
    <S.Pagination>
      <button type="button" onClick={onClickPrev}>
        〈
      </button>
      {pager.pages.map(page => (
        <S.Page
          type="button"
          key={page}
          active={currentPage === page}
          onClick={() => onClickPage(page)}
        >
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
