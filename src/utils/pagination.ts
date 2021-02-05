export const PER_PAGE = 5

export const getRange = (start: number, end: number): number[] =>
  [...Array(end - start + 1)].map((_, index) => start + index)

export const getPageCount = (totalCount: number): number[] => getRange(1, Math.ceil(totalCount / PER_PAGE))
