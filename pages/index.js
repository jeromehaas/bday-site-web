import { PageWrapper } from 'components/PageWrapper';
import { BdayCard } from 'components/BdayCard';
import { bdayData } from 'data/bday-data';
import { sortBdaysByDate } from 'functions/sort-bdays-by-data';


export default function Home() {
	
	const bdays = sortBdaysByDate( bdayData );
 
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
