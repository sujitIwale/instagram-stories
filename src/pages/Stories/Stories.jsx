import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data.json';
import StoryContainer from '../../components/StoryContainer/StoryContainer';
import './Stories.css';
import StorySlider from '../../components/StorySlider/StorySlider';

const Stories = () => {
	const userName = useParams().username;

	return (
		<div className='stories-page'>
			<header>
				<Link to='/'>
					<h3>Instagram</h3>
				</Link>
				<Link to='/'>
					<h2>
						<i class='fa-solid fa-xmark'></i>
					</h2>
				</Link>
			</header>
			<StorySlider data={data} userName={userName} />
		</div>
	);
};

export default Stories;
