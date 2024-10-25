const fs = require('fs');
const sass = require('sass');
const { execSync } = require('child_process');
const CSSPath = 'lib/uds-themes-publisher/dist/';
const themes = ['bar', 'bys', 'dj', 'fct', 'fnl', 'mg', 'mw', 'ofn', 'rnc', 'wsj'];

// Check to see if we have a dist/ folder, and if not make it.
ensureFolder('dist/')

// For each theme, grab the base styles
// then add an import for the styles from the components to a sass file
// then create the sass file in the file system.
themes.forEach((theme) => {
	let source = CSSPath + theme + ""
	let dest = "dist/" + theme + "/"
	ensureFolder(dest)
	removeFoldersAt(dest)
	
	// unzip
	execSync(`unzip ${source}/css -d ${dest}`)
	
	let ders = getDirectories("src")
	let sasses = []
	ders.forEach((der) => {
		// checks for styles file
		var stylesFile = `${der}/styles.css`
		if(fs.existsSync(stylesFile)) {
			console.log(`found sass file: ${stylesFile}`)
			sasses.push(stylesFile)
		}
	})
	
let content = `// ${theme} theme
// Add imports of theme dependent pieces here
@import "${theme}/themefiles.scss";
@import "colors/contextual/dark/DJDSColors.scss";
@import "colors/contextual/light/DJDSColors.scss";
@import "colors/palette/DJDSPalette.scss";
@import "colors/palette/NKPaletteSocial.scss";

`

	sasses.forEach((ssss) => {
		content = content.concat(`@import "${ssss}";\n`);
	})
	console.log(`${dest}styles.scss`)
	generateSassRootFile(`${dest}styles.scss`, content)
})

// helper to ensure that we have a folder somewhere
function ensureFolder(folderName) {
	if(!fs.existsSync(folderName)) {
		console.log(`Making ${folderName} folder.`)
		fs.mkdirSync(folderName)
		return false
	}
	return true
}

// removes a ton of folders that don't need to be there.
function removeFoldersAt(place) {
	
	function removeDir(directory) {
		if(fs.existsSync(directory)) {
			execSync(`rm -rf directory`);
		}
	}
	removeDir(place+"colors");
	removeDir(place+"shadows");
	removeDir(place+"spacing");
	removeDir(place+"typography");
}

// Gets a list of directories at the dir
function getDirectories(dir) {
	var results = [];
	fs.readdirSync(dir).forEach(function(file) {
		file = dir+'/'+file;
		let stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			if (!file.includes("__")) results.push(file);
		}
	});
	return results;
};

// generates a root sass file from provided content.
function generateSassRootFile(file, content) {
	fs.writeFile(file, content, error => {
		if (error) {
			console.log("something whent wrong")
		} else {
			console.log("Wrote file")
		}
	});
}
