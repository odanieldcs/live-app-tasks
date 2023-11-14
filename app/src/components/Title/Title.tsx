import React from 'react';
import Styles from './Title.module.css';

const headingSource = {
	Title: 'h1',
	Subtitle: 'h2',
	SmallTitle: 'h3',
};

type HeadingType = keyof typeof headingSource;

export function Title({
	children,
	heading,
}: {
	children: React.ReactNode;
	heading: HeadingType;
}) {
	const tag = headingSource[heading];

	return React.createElement(tag, { className: Styles.title }, children);
}
