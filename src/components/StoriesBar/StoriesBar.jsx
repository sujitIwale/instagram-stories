import React from 'react';
import data from '../../data.json';
import StoryAvatar from '../StoryAvatar/StoryAvatar';
import './StoriesBar.css';

const StoriesBar = () => {
	return (
		<div className='stories-bar'>
			<ul className='stories-list'>
				{data.map((user) => (
					<li key={user.id}>
						<StoryAvatar user={user} key={user.id} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default StoriesBar;
