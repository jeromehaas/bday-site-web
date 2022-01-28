import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import cookies from 'js-cookie';

const PageWrapper = ({ children }) => {
	
	const [ theme, setTheme ] = useState('light');
	const [ loading, setLoading ] = useState(true);
	const router = useRouter();

	useEffect(() => {

		// GET CURRENT HOUR 
		const currentTimeStamp = new Date();
		const currentHour = currentTimeStamp.getHours();
		
		// SET THEME 
		if ( currentHour > 20 || currentHour < 6) {
			setTheme('dark');
		}

		// CHECK AUTH
		const cookie = cookies.get('authentificated');
		if (process.env.NEXT_PUBLIC_COOKIE_KEY !== cookie && process.env.NEXT_PUBLIC_MODE !== 'production' ) {
			router.push('/login');	
		}

		setLoading('false');
		
	}, [ router ]);

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
	