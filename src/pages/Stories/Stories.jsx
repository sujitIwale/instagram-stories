import React from 'react';
import { Link } from 'react-router-dom';
import StoryContainer from '../../components/StoryContainer/StoryContainer';
import './Stories.css';

const Stories = () => {
	return (
		<div className='stories-page'>
			<header>
				<Link to='/'>
					<h3>Instagram</h3>
				</Link>
				<Link to='/'>
					<h2>X</h2>
				</Link>
			</header>
			<main>
				<StoryContainer />
			</main>
		</div>
	);
};

export default Stories;
