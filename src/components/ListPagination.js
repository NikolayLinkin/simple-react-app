import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    articlesCount: PropTypes.number.isRequired,
};

const ListPagination = ({articlesCount, pager, onSetPage, currentPage}) => {
    const range = [];
    for(let i = 0; i < Math.ceil(articlesCount / 10);  ++i) {
        range.push(i);
    }

    const setPage = page => {
        if(pager) {
            onSetPage(page, pager(page));
        } else {
            onSetPage(page, '')
        }
    };

    return (
        <ul className="pagination">
            {range.map(page => {

                return (
                    <li className={currentPage === page ?  'pagination__item pagination__item--active' : ''}
                        onClick={() => setPage(page)}
                        key={page.toString()}
                    >
                        {page + 1}
                    </li>
                )
            })}
        </ul>
    );
};

ListPagination.propTypes = propTypes;
export default ListPagination;