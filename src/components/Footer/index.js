import React from "react";
import "./index.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { getDisplayPages } from "../../utils";

const Footer = (props) => {
  const { page, setPage, canNextPage, canPrevPage, totalNumberOfPages } = props;

  const pages = getDisplayPages(totalNumberOfPages, page);

  return (
    <div className="footerContainer">
      <div className="pageNumContainer">
        {pages.map((pageNumber, ind) => (
          <div key={ind} onClick={() => setPage(pageNumber)}>
            <p className={`${page === pageNumber ? "selectedPage" : ""}`}>
              {pageNumber}
            </p>
          </div>
        ))}
      </div>
      <button
        className="actionButton"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={!canPrevPage()}
      >
        <SlArrowLeft />
      </button>
      <button
        className="actionButton"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={!canNextPage()}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Footer;
