import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';

const PageWrapper = ({ children }) => {
	
	const [ theme, setTheme ] = useState('light');
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {

		// GET CURRENT HOUR 
		const currentTimeStamp = new Date();
		const currentHour = currentTimeStamp.getHours();
		console.log(currentHour);
		
		// SET THEME 
		if ( currentHour > 20 || currentHour < 6) {
			setTheme('dark');
		}
		setLoading('false');
		console.log('use effect done');
	}, []);

	return (

		<Fragment>

			{ loading && (
			
				<div className={`page-wrapper page-wrapper--${theme}`}>
 
 		    	<Head>
						<title>Bday Site App</title>
						<meta name='description' content='Overview of all friends birthdays' />
     			</Head>
			
					{ children }	
			
				</div>
		
			)}
			
		</Fragment>

	);

};

export { PageWrapper };
	