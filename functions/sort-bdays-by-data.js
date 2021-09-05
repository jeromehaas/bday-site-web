const sortBdaysByDate = (bdays) => {
	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getYear();

	const bdaysThisYear = bdays.filter((item) => {
		if ( item.bday.month === currentMonth ) {
			return item.bday.month >= currentMonth && item.bday.day >= currentDay;
		} else {
			return item.bday.month >= currentMonth;
		}
	}).sort((a, b) => {
		return new Date(`${currentYear}-${a.bday.month}-${a.bday.day}`) - new Date(`${currentYear}-${b.bday.month}-${b.bday.day}`);
	});
	
	const bdaysNextYear = bdays.filter((item) => {
		if ( item.bday.month === currentMonth) {
			return item.bday.month <= currentMonth && item.bday.day < currentDay;
		} else {
			return item.bday.month <= currentMonth;
		}
	}).sort((a, b) => {
		return new Date(`${currentYear}-${a.bday.month}-${a.bday.day}`) - new Date(`${currentYear}-${b.bday.month}-${b.bday.day}`);
	});
	
	const res = [ ...bdaysThisYear, ...bdaysNextYear ];
	return res;
};

module.exports = {
	sortBdaysByDate
};