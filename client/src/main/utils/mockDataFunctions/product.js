import { faker } from '@faker-js/faker';

export const generateProducts = (qty) => {
	const returnArray = [];

	for (let i = 0; i < (qty || 1); i++) {
		returnArray.push({
			title: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			priceInCents: Math.floor(Math.random() * 2999) + 1,
			id: faker.string.uuid(),
			categories: [faker.commerce.department()],
			qtyStock: Math.floor(Math.random() * 20) + 1,
			images: [faker.image.urlLoremFlickr()],
		});
	}

	return returnArray;
};
