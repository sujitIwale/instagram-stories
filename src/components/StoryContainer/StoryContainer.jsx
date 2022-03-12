import React from 'react';
import './StoryContainer.css';

const StoryContainer = () => {
	return (
		<div className='story-container'>
			<div className='story-header'>
				<img
					alt='user-profile'
					src='https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
				/>
				<span>John</span>
				<span>10h</span>
			</div>
			<video className='video' controls>
				<source src='https://cdn.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4'></source>
			</video>
		</div>
	);
};

export default StoryContainer;
