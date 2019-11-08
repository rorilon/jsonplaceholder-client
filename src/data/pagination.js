export const dataForPage = (data, page, perPage) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  return data.slice(start, end);
};
export const totalPages = (data, perPage) =>
  Math.trunc(data.length / perPage) + (data.length % perPage ? 1 : 0);
