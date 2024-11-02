import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
	const { itemId } = useParams();

	console.log(itemId);

	return (
		<div
			style={{
				marginTop: '20vh',
			}}
		>
			<h1>Item page</h1>
			<p>{itemId}</p>
		</div>
	);
};

export default ItemPage;
