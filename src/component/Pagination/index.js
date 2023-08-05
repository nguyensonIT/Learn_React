import { useState } from "react";
import "./pagination.css";
import { useSearchParams } from "react-router-dom";
export const Pagination = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get("page")) || 1
    );

    const handlePrev = () => {
        const page = currentPage - 1;
        setSearchParams({ page: page });
        props.setParam({ page: page });
        return setCurrentPage(page);
    };
    const handleNext = () => {
        const page = currentPage + 1;
        setSearchParams({ page: page });
        props.setParam({ page: page });
        return setCurrentPage(page);
    };

    return (
        <div className="pagination-handmade">
            <button
                className="btn-btn btn-prev"
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {currentPage >= 3 && <span className=" btn-page">...</span>}
            {currentPage > 1 && (
                <span className=" btn-page">{currentPage - 1}</span>
            )}
            <span className="current-page btn-page">{currentPage}</span>
            {currentPage < props.total && (
                <span className=" btn-page">{currentPage + 1}</span>
            )}
            {currentPage <= props.total - 2 && (
                <span className=" btn-page">...</span>
            )}
            <button
                className="btn-btn btn-next"
                onClick={handleNext}
                disabled={currentPage === props.total}
            >
                &gt;
            </button>
        </div>
    );
};
