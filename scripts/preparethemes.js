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
	removeFoldersAt(dest, theme)
	
	// unzip
	execSync(`unzip ${source}/css -d ${dest}`)
	
	// make the file
	let content = generateScssFileContent(theme) 
	let sassFileName = `${dest}styles.scss`
	makeFile(sassFileName, content)

	//let result = sass.compile(sassFileName, {style: "expanded", verbose: true})
	//console.log(result.css)
	//execSync(`sass ${dest}styles.scss:${dest}styles.css`)
	
	console.log(process.cwd())
	let otherresult = sass.compileString(content)
	console.log(otherresult)
	
	console.log(sass.info)
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
function removeFoldersAt(place, theme) {
	
	function removeDir(directory) {
		if(fs.existsSync(directory)) {
			execSync(`rm -rf ${directory}`);
		}
	}
	removeDir(place+"colors");
	removeDir(place+"shadows");
	removeDir(place+"spacing");
	removeDir(place+"typography");
	
	let capitalTheme = theme.toUpperCase()
	
	// remove random stuff here.
	execSync(`rm -rf ${place}${capitalTheme}Preflight.txt`);
	execSync(`rm -rf ${place}styles.scss`);
	execSync(`rm -rf ${place}systemReport.txt`);
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

function getComponentStyles() {
	// build a list of component styles
	let sasses = []
	getDirectories("src").forEach((der) => {
		// checks for styles file
		var stylesFile = `${der}/styles.css`
		if(fs.existsSync(stylesFile)) {
			//console.log(`found sass file: ${stylesFile}`)
			sasses.push(stylesFile)
		}
	})
	return sasses
}

// generates a root sass file from provided content.
function makeFile(filename, content) {
	fs.writeFile(filename, content, error => {
		if (error) {
			console.log("failed to generate a file.")
		} else {
			//console.log("Wrote a file.")
		}
	});
}

function generateScssFileContent(theme) {
	// build a list of component styles
	let sasses = getComponentStyles()
	
	let content = `// ${theme} theme
@use "/dist/${theme}/typography/DJDSTypography.css";
@use "/dist/${theme}/spacing/DJDSSpacing";
@use "/dist/${theme}/spacing/WSJSpacing";
@use "/dist/${theme}/shadows/light/DJDSShadows" as DJDSShadowsLight;
@use "/dist/${theme}/shadows/dark/DJDSShadows" as DJDSShadowsDark;
@use "/dist/${theme}/colors/contextual/dark/DJDSColors" as DJDSColorsLight;
@use "/dist/${theme}/colors/contextual/light/DJDSColors" as DJDSColorsDark;
@use "/dist/${theme}/colors/palette/DJDSPalette";
@use "/dist/${theme}/colors/palette/NKPalette";
@use "/dist/${theme}/colors/palette/NKPaletteSocial";

`
		
	// add an import for each component to our sass file.
	sasses.forEach((ssss) => {
		content = content.concat(`@use "../../${ssss}";\n`);
	})
	
	return content
}
