import React, { useState } from 'react';
import { Card } from 'components/Card';

const Form = () => {

	const defaultState = {
		hasErrors: false,
		entryWasCreated: false,
		fields: {
			firstname: '', 
			lastname: '',
			birthdayDate: ''
		}
	};

	const [ formState, setFormState ] = useState( defaultState );

	const onChange = ( event ) => {
		const value = event.target.value;
		const target = event.target.name;
    setFormState(prevState => ({
			...prevState,
			fields: { 
				...prevState.fields, 
				[target]: value 
			}
		}));
	};

	const onSubmit = async () => {
		
		for ( let item in formState.fields ) {
			if (!formState.fields[item]) {
				setFormState(prevState => ({
					...prevState, 
					hasErrors: true
				}));
			}
		}

		if (formState.hasErrors === false) {
			console.log(birthdayDate);
			const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstname: formState.fields.firstname,
					lastname: formState.fields.lastname,
					day: new Date(formState.fields.birthdayDate).getDate(),
					month: new Date(formState.fields.birthdayDate).getMonth() + 1,
					year:	new Date(formState.fields.birthdayDate).getFullYear(),
				})
			});
			console.log(data);

			setFormState(defaultState);
		}
	};

	return (
		<Card className='form'>
			<div className='form__field'>
				<label htmlFor='firstname'>Firstname</label>
				<input name='firstname' id='firstname' type='text' value={ formState.fields.firstname} onChange={() => onChange(event)} />
			</div>
			<div className='form__field'>
				<label htmlFor='lastname'>Lastname</label>
				<input name='lastname' id='lastname' type='text' value={ formState.fields.lastname} onChange={() => onChange(event)} />
			</div>
			<div className='form__field'>
				<label htmlFor=''>Birthday</label>
				<input name='birthdayDate' id='birthdayDate' type='date' value={ formState.fields.birthdayDate} onChange={() => onChange(event)} />
			</div>
			<button className='form__button' onClick={ onSubmit }>Create</button>
		</Card>
	);
};

export {
	Form
};
