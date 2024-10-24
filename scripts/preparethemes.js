const fs = require('fs');
const sass = require('sass');
const { execSync } = require('child_process');
const CSSPath = 'lib/uds-themes-publisher/dist/';
const themes = ['bar', 'bys', 'dj', 'fct', 'fnl', 'mg', 'mw', 'ofn', 'rnc', 'wsj'];

// Check to see if we have a dist/ folder, and if not make it.
ensureFolder('dist/')

// For each theme, grab the base styles
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
	generateSass(`${dest}styles.scss`, content)
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
	
	if(fs.existsSync(place + "colors")) {
		execSync(`rm -rf ${place}colors`);
	}
	if(fs.existsSync(place + "shadows")) {
		execSync(`rm -rf ${place}shadows`);
	}
	if(fs.existsSync(place + "spacing")) {
		execSync(`rm -rf ${place}spacing`);
	}
	if(fs.existsSync(place + "typography")) {
		execSync(`rm -rf ${place}typography`);
	}
}

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

function generateSass(file, content) {
	fs.writeFile(file, content, error => {
		if (error) {
			console.log("something whent wrong")
		} else {
			console.log("Wrote file")
		}
	});
}

//function grabSassFromDirectory(dir) {
//	var comp = "";
//	fs.readdirSync(dir).forEach(function(file) {
//		file = dir+'/'+"styles.scss"
//		let stat = fs.statSync(file);
//		if (stat) {
//			console.log(stat)
//			comp = file;
//		}
//	})
//	return file
//}

//
//// Forward declarations
//let __cmdArgs = {}
//let __isCMDArgsParsed = false
//let __debug = false;
//
//console.log("copy the css from the right package based on input")
//
//copyCSS(arguments.theme)
//
//console.log("Recursively grab CSS from our components and concatenate it into a build.")
//
//// returns the command line arguments in a neat little list
//function CMDArgs() {
//	if (__isCMDArgsParsed == true) return __cmdArgs
//	let args = process.argv
//	args.shift();args.shift();args.shift()
//	
//	process.argv.forEach(function (val, index, array) {
//		if (val.includes("=")) {
//			let cmds = val.split("=")
//			__cmdArgs[cmds[0]] = cmds[1]
//		}
//	})
//	
//	if (__debug	== true) {
//		for (let key in args) {
//			console.log('  '+ key + ': ' + args[key]);
//		}
//	}
//	
//	__isCMDArgsParsed = true
//	return __cmdArgs
//}
//
//// copies css from the uds-theme-publisher for the specified build.
//function copyCSS(theme) {
//	let packageInstalled = false
//	let path = "../node_modules/@newscorp-ghfb/djds-themes-publisher/"
//	// verify that uds-theme-publisher is in node_modules
//	if(fs.existsSync(path + 'package.json')) packageInstalled = true
//	
//	if (packageInstalled) {
//		fs.readFile(path + '/' + theme + '/' + theme + '-design-tokens.tokens.json', (err, data) => {
//			if (!err && data) {
//				console.log("found this thing")
//			}
//		})
//	} else {
//		console.log("package is not installed")
//	}
//	
//}
