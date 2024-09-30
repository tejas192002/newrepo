import ReactPaginate from "react-paginate";
import { useState } from "react";
import UserDataTable from "./UserDataTable";
import prevPage from "../../../Assets/EnquiresIcon/PrevPage.svg";
import nextPage from "../../../Assets/EnquiresIcon/nextPage.svg";

function PaginatedItems({
  itemsPerPage,
  handleOpen,
  open,
  users,
  handleDelete,
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const nextpage = <img src={nextPage} alt="icon" />;
  const prevpage = <img src={prevPage} alt="icon" />;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <UserDataTable
        handleOpen={handleOpen}
        currentItems={currentItems}
        open={open}
        handleDelete={handleDelete}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel={nextpage}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel={prevpage}
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageClassName="pagination-page"
        activeClassName="pagination-active"
        breakClassName="pagination-break"
        previousClassName="pagination-previous"
        nextClassName="pagination-next"
      />
    </>
  );
}
export default PaginatedItems;
