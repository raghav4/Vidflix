import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
	console.log(currentPage);
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1); // returns array

	return (
		<nav>
			<ul className='pagination justify-content-center'>
				{pages.map(page => (
					<li
						key={page}
						className={page === currentPage ? 'page-item active' : 'page-item'}>
						<Link
							style={{ cursor: 'pointer' }}
							onClick={() => onPageChange(page)}
							className='page-link'>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
};
export default Pagination;
