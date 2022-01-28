import { PageWrapper } from 'components/PageWrapper';
import { BdayCard } from 'components/BdayCard';
import { bdayData } from 'data/bday-data';
import { sortBdaysByDate } from 'functions/sort-bdays-by-data';
import { Form } from 'components/Form';


export default function Home() {
 
	return (
    <div>

      <PageWrapper>

				<Form />
    
		  </PageWrapper>

    </div>
  );
}
