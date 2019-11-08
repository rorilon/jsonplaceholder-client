import Pagination from "react-bootstrap/Pagination";
import { totalPages } from "../data/pagination";
import React from "react";

export default function PaginationComponent({
  content,
  paginationMode,
  pagination,
  selectPage
}) {
  return (
    <Pagination>
      {Array(totalPages(content, pagination.perPage))
        .fill(null)
        .map((_, i) => (
          <Pagination.Item
            onClick={() => selectPage(i + 1, paginationMode)}
            active={i + 1 === pagination.page}
          >
            {i + 1}
          </Pagination.Item>
        ))}
    </Pagination>
  );
}
