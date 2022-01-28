import React from 'react';
import { Card } from 'components/Card';

const months = [
	'January', 
	'February',
	'March',
	'April',
	'Mai',
	'June',
	'Jule',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const BdayCard = ({ data }) => {
	return (
		<Card className='bday-card'>
				<div className=' bday-card__date'>
					<p className='bday-card__date--day'>{ data.day }</p>	
					<p className='bday-card__date--month'>{ months[data.month - 1] }</p>	
				</div>
				<div className='bday-card__person-info'>
					<table className='bday-card__person-info__table'>
						<tbody>

						<tr className='bday-card__person-info__tr'>
							<td className='bday-card__person-info__td person-info__td--firstname'>
								{ data.firstname && 'Firstname:' } 
							</td>
							<td className='bday-card__person-info__td person-info__td--firstname'>
									{ data.firstname }
							</td>
						</tr>
						<tr className='bday-card__person-info__tr'>
							<td className='bday-card__person-info__td person-info__td--lastname'>
									{ data.lastname && 'Lastame:' } 
							</td>
							<td className='bday-card__person-info__td person-info__td--lastname'>
									{ data.lastname }
							</td>
						</tr>
						<tr className='bday-card__person-info__tr'>
							<td className='bday-card__person-info__td person-info__td--birthyear'>
								{ data.year && 'Birthyear:' } 
							</td>
							<td className='bday-card__person-info__td person-info__td--birthyear'>
									{ data.year }
							</td>
						</tr>
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
		</Card>
	);
};

export {
	BdayCard
};
