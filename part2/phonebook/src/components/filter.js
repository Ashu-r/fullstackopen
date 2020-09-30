import React from 'react';

const Filter = ({ filterByName }) => {
	return (
		<div>
			filter contacts
			<input onChange={filterByName} />
		</div>
	);
};

export default Filter;
