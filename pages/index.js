import { PageWrapper } from 'components/PageWrapper';
import { BdayCard } from 'components/BdayCard';
import { bdayData } from 'data/bday-data';
import { sortBdaysByDate } from 'functions/sort-bdays-by-data';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
	
	useEffect(() => {
		getBdays();
	}, []);

	const [ bdays, setBdays ] = useState([]);

	const getBdays = async () => {
		const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`);
		const data = response.data;
		console.log(data);
		data.sort((a,b) => {
			return new Date(b.birthdayDate) - new Date(a.birthdayDate);
		});
		setBdays(data);
	};
 
	return (
    <div>
      <PageWrapper>
				<div className='bday-card-wrapper'>
					{ bdays.map(( item, index ) => (
						<BdayCard data={ item } key={ index } />
					))}
				</div>
		  </PageWrapper>
    </div>
  );
}
