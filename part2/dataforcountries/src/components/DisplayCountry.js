import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({ weather }) => {
	if (weather) {
		return (
			<div>
				<p>Temperature: {weather.current.temperature} celcius</p>
				<img src={weather.current.weather_icons[0]} alt="weather" />
				<p>{weather.current.weather_descriptions[0]}</p>
			</div>
		);
	} else {
		return <p>Loading weather</p>;
	}
};

export const DisplayCountry = ({ displayCountry }) => {
	const [ weather, setWeather ] = useState();
	useEffect(
		() => {
			axios
				.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${displayCountry.capital}`)
				.then((response) => setWeather(response.data));
		},
		[ displayCountry.capital ]
	);
	console.log(weather);
	if (displayCountry) {
		console.log(displayCountry);

		return (
			<div>
				<div>
					<h1>{displayCountry.name}</h1>
				</div>
				<div>
					<p>Capital: {displayCountry.capital}</p>
					<p>Population: {displayCountry.population}</p>
				</div>
				<div>
					<h2>Languages</h2>
					<ul>{displayCountry.languages.map((language) => <li key={language.name}>{language.name}</li>)}</ul>
				</div>
				<div>
					<img src={displayCountry.flag} alt={displayCountry.name} width="400" />
				</div>
				<h2>Weather in {displayCountry.capital}</h2>

				<Weather weather={weather} />
			</div>
		);
	} else {
		return <p>No match found</p>;
	}
};
