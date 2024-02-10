export const getTotalPages = () => {
  return Array.from({ length: 40 }, (_, index) => index + 1);
};

export const getDisplayPages = (totalNumberOfPages, page) => {
  let pagination = [],
    i = 1;

  while (i <= totalNumberOfPages.length) {
    if (
      i <= 1 ||
      i >= totalNumberOfPages - 2 ||
      (i >= page - 1 && i <= page + 1)
    ) {
      pagination.push(i);
      i++;
    } else {
      pagination.push("...");

      //jump to the next page to be linked in the navigation
      i = i < page ? page - 1 : totalNumberOfPages - 2;
    }
  }
  return pagination;
};
