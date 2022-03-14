import React, { useEffect, useRef, useState } from 'react';
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
	return stories;
};

const StorySlider = ({ data, userName }) => {
	const [UserStories, setUserStories] = useState([]);
	const storySliderRef = useRef();
	const user = data.find((user) => user.userName === userName);
	const userIndex = data.findIndex((user) => user.userName === userName);

	useEffect(() => {
		let start = userIndex - 2,
			end = userIndex + 2;
		const UserStories = data.filter((story, i) => {
			if (i >= start && i <= end) return true;
			else return false;
		});
		console.log(UserStories);
		setUserStories(UserStories);
		setTimeout(() => {
			storySliderRef.current.scrollLeft =
				parseInt(UserStories.length / 2) * 180;
		}, 500);
	}, [userName, data, userIndex]);
	if (!user || userIndex === -1) return null;
	return (
		<main className='story-slider' ref={storySliderRef}>
			{getStories(UserStories, userIndex).map((u, i) => (
				<StoryContainer
					key={i}
					user={u}
					selected={user.userName === u.userName ? true : false}
				/>
			))}
		</main>
	);
};

export default StorySlider;
