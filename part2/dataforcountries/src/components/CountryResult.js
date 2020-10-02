import React from 'react';
import { DisplayCountry } from './DisplayCountry';

export const CountryResult = ({ showCountries, setShowCountries }) => {
	if (!showCountries) {
		return <div>Please enter country name in aobve field</div>;
	} else if (showCountries.length > 10) {
		return <div>Too many matches, please specify exact name</div>;
	} else if (showCountries.length > 1) {
		return (
			<div>
				{showCountries.map((country) => (
					<p key={country.name}>
						{country.name} <button onClick={() => setShowCountries(country)}>show</button>
					</p>
				))}
			</div>
		);
	} else {
		// console.log(showCountries, showCountries[0]);
		const displayCountry = showCountries[0] || showCountries;
		return (
			<div>
				<DisplayCountry displayCountry={displayCountry} />
			</div>
		);
	}
};
