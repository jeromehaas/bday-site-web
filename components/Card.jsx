import React, { useState, useEffect, Fragment } from 'react';

const Card = ({ children }) => {

	const [ theme, setTheme ] = useState('light');
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {

		// GET CURRENT HOUR 
		const currentTimeStamp = new Date();
		const currentHour = currentTimeStamp.getHours();
		
		// SET THEME 
		if ( currentHour > 20 || currentHour < 6) {
			setTheme('dark');
		}
		setLoading('false');
		
	}, []);

	return (

		<Fragment>

		{ loading && (
			
			<div className={`card card--${theme}`}>
				{ children }	
			</div>

		)}

		</Fragment>

	);

};

export {
	Card
};
