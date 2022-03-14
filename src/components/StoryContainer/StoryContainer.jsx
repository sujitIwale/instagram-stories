import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import './StoryContainer.css';
import UnselectedStory from './UnselectedStory';

const StoryContainer = ({ user, selected }) => {
	const [Current, setCurrent] = useState(0);
	const videoRef = useRef();
	const noOfStories = user.stories.length;

	const nextStory = () => {
		if (noOfStories - 1 === Current) return;
		setCurrent((state) => state + 1);
		// console.log(Current);
		console.log(user.stories[Current + 1]);
	};

	const previousStory = () => {
		if (Current <= 0) return;
		setCurrent((state) => state - 1);
	};
	const videoAction = () => {
		if (videoRef.current) {
			console.log(videoRef.current);
		}
	};
	const onKeyDown = useCallback(
		(e) => {
			if (e.key === 'ArrowLeft') {
				console.log(e);
				// console.log(Current);
				previousStory();
			} else if (e.key === 'ArrowRight') {
				nextStory();
			}
		},
		[nextStory, previousStory]
	);

	useLayoutEffect(() => {
		if (selected) {
			window.onkeydown = onKeyDown;
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [user, onKeyDown, selected]);
	if (!selected) return <UnselectedStory user={user} />;

	return (
		<div className='story-container'>
			<i
				className={`fa-solid fa-angle-left pointer ${
					!(Current > 0) ? 'hidden' : ''
				}`}
				onClick={previousStory}></i>
			<div className='story' onClick={videoAction}>
				<div className='story-header'>
					<img alt='user-profile' src={user.img_url} />
					<h3>{user.userName}</h3>
					<span>10h</span>
				</div>

				{/* <div> */}
				<h3 className='story-title'>{user.stories[Current].title}</h3>
				{user.stories.map((story, i) =>
					Current === i ? (
						<video
							key={i}
							className='video'
							controls
							ref={videoRef}>
							<source
								src={user.stories[Current].video_url}></source>
						</video>
					) : null
				)}
				{/* </div> */}
			</div>
			<i
				className={`fa-solid fa-angle-right pointer ${
					!(Current < noOfStories - 1) ? 'hidden' : ''
				}`}
				onClick={nextStory}></i>
		</div>
	);
};

export default StoryContainer;
