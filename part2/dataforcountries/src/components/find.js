import React from 'react';

const Find = ({ countries, setShowCountries }) => {
	if (countries) {
		const displayCountries = (event) => {
			let searchFilter = countries.filter(
				(country) => country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
			);
			searchFilter = searchFilter.length > 0 ? searchFilter : null;
			setShowCountries(searchFilter);
		};

		return (
			<p>
				find countries <input type="text" onChange={displayCountries} />
			</p>
		);
	} else {
		return <p>find countries Loading...</p>;
	}
};

export default Find;
