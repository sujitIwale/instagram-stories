import React from 'react';
import { Link } from 'react-router-dom';
import './StoryAvatar.css';

const StoryAvatar = ({ user }) => {
	return (
		<Link to={`/stories/${user.userName}`}>
			<div className='story-avatar pointer'>
				<img
					alt='storyImg'
					className='story-avatar-img'
					src={user.img_url}
				/>
				<span className='story-avatar-name'>{user.userName}</span>
			</div>
		</Link>
	);
};

export default StoryAvatar;
