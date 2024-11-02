// listImages.js
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'assets', 'mockImages');
const outputFilePath = path.join(__dirname, 'src', 'imageList.json');

fs.readdir(imagesDir, (err, files) => {
	if (err) {
		return console.error('Unable to scan directory: ' + err);
	}

	const imageFiles = files.filter((file) =>
		/\.(jpg|jpeg|png|gif)$/i.test(file)
	);
	fs.writeFileSync(outputFilePath, JSON.stringify(imageFiles, null, 2));
	console.log('Image list saved to imageList.json');
});
