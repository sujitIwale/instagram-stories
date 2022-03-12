import React, { useEffect, useState } from 'react';
import StoryContainer from '../StoryContainer/StoryContainer';
import './StorySlider.css';

const getStories = (stories, userId) => {
	console.log(stories);
	if (stories.length <= 4) {
		userId === 0
			? (stories = stories.slice(0, 3))
			: userId === 1
			? (stories = stories.slice(0, 3))
			: (stories = stories.slice(1, 4));
	}
	console.log(stories);
	return stories;
};

const StorySlider = ({ data, userName }) => {
	const [UserStories, setUserStories] = useState([]);
	const user = data.find((user) => user.userName === userName);
	const userIndex = data.findIndex((user) => user.userName === userName);

	useEffect(() => {
		let start = userIndex - 2,
			end = userIndex + 2;
		const stories = data.filter((story, i) => {
			if (i >= start && i <= end) return true;
			else return false;
		});
		console.log(stories);
		setUserStories(stories);
	}, [user, userIndex, data]);
	if (!user || userIndex === -1) return null;
	return (
		<main className='story-slider'>
			{getStories(UserStories, userIndex).map((u) => (
				<StoryContainer
					user={u}
					selected={user.userName === u.userName ? true : false}
				/>
			))}
		</main>
	);
};

export default StorySlider;
