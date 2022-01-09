const fs = require('fs');

cp('bin/vercel.json', 'dist/vercel.json')
cp('package.json', 'dist/package.json')

function cp(frome, to) {
	fs.readFile(frome, function (err, data) {
		if (err) throw new Error('something wrong was happended');
		fs.writeFile(to, data, function (err) {
			if (err) throw new Error('something wrong was happended');
		})
	})
}