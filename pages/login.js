import React, { useState, useEffect } from 'react';
import { PageWrapper } from 'components/Pagewrapper';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
	
	const router = useRouter();
	
	const [ userInput, setUserInput ] = useState('');
	useEffect(() => {
		if (userInput.length === 6) {
			
			if  (userInput === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
				cookies.set('authentificated', process.env.NEXT_PUBLIC_COOKIE_KEY, { expires: 7 });
				router.push('/');
			} else {
				setTimeout(() => {
					setUserInput('');
				}, 1000);
			}
		}
	}, [ userInput ]);

	const updateUserInput = ( number ) => {
		setUserInput(userInput + number);
	};

	const back = () => {
		setUserInput(userInput.slice(0, -1));
	};

	const reset = () => {
		setUserInput('');
	};

	return (
		<PageWrapper>
						<div className='login section'>
							<div className='login__inner section__inner'>
								<div className='login__wrapper'>
									<div className='login__dial-wrapper'>
										<button className='login__dial-button' onClick={ () => updateUserInput('1')}>1</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('2')}>2</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('3')}>3</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('4')}>4</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('5')}>5</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('6')}>6</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('7')}>7</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('8')}>8</button>
										<button className='login__dial-button' onClick={ () => updateUserInput('9')}>9</button>
										<button className='login__dial-button login-content__dial-button--reset' onClick={ reset }></button>
										<button className='login__dial-button' onClick={ () => updateUserInput('0')}>0</button>
										<button className='login__dial-button login-content__dial-button--back' onClick={ back }></button>
									</div>
									<div className='login__dots-wrapper'>
										<div className={`login-content__dot ${ userInput.length >= 1 ? 'login-content__dot--active' : ''}`}></div>
										<div className={`login-content__dot ${ userInput.length >= 2 ? 'login-content__dot--active' : ''}`}></div>
										<div className={`login-content__dot ${ userInput.length >= 3 ? 'login-content__dot--active' : ''}`}></div>
										<div className={`login-content__dot ${ userInput.length >= 4 ? 'login-content__dot--active' : ''}`}></div>
										<div className={`login-content__dot ${ userInput.length >= 5 ? 'login-content__dot--active' : ''}`}></div>
										<div className={`login-content__dot ${ userInput.length >= 6 ? 'login-content__dot--active' : ''}`}></div>

									</div>
								</div>
						</div>
					</div>	
		</PageWrapper>
	);
};

export default Login;
