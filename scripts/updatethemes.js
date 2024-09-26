const fs = require('fs');
const { execSync } = require('child_process');

// Check to see if we have the old themes around.
if(fs.existsSync('lib/uds-themes-publisher/package.json')) {
	console.log("Old install found, deleting...")
	execSync(`rm -rf lib/uds-themes-publisher`);
	downloadThemeFiles()
} else {
	downloadThemeFiles()
}

function downloadThemeFiles() {
	console.log("Downloading new themes...")
	execSync(`cd lib; git clone https://github.com/newscorp-ghfb/uds-themes-publisher.git`)	
	console.log("Themes Downloaded.\n")
}
