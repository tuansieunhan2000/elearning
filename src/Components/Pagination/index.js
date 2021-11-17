import React from "react";

const Pagination = (props) => {
    const { pagination, onPageChange } = props;
    const { page, pageSize, totalPages } = pagination;
    console.log("totalPages", totalPages);
    function handlePageChange(page) {
        if (onPageChange) {
            console.log("page", page);
            onPageChange(page);
        }
    }
    return (
        <div>
            <button
                disabled={page <= 1}
                onClick={() => {
                    handlePageChange(page - 1);
                }}
            >
                Prev
            </button>
            <button
                disabled={page >= totalPages}
                onClick={() => {
                    handlePageChange(page + 1);
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
