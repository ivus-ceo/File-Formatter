const fs = require('fs');
const DOMRegex = require('./DOMRegex');

const fileContent = fs.readFileSync('index.html', 'utf8', function(error, data) {
	return data;
});

const newFileContent = fileContent.replace(DOMRegex.href, 'TEST VALUE');

fs.writeFileSync('index-formatted.html', newFileContent, function(error) {
	if (error) throw new Error(error);
});
