import React from 'react';
import { Link } from 'react-router-dom';

const UnselectedStory = ({ user }) => {
	return (
		<Link to={`/stories/${user.userName}`}>
			<div className='unselected-story-container'>
				<div className='story-avatar unselected-story pointer'>
					<img
						alt='storyImg'
						className='story-avatar-img'
						src={user.img_url}
					/>
					<span className='story-avatar-name'>{user.userName}</span>
				</div>
			</div>
		</Link>
	);
};

export default UnselectedStory;
