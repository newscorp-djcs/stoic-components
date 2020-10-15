const fs = require('fs');
const filledIcons = require('./filled-icons-list');
const outlinedIcons = require('./outlined-icons-list');

const warning =
  '// This file is automatically generated do not modify it. See generate-icons.js for documentation.';

const toKebabCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
    .filter(Boolean)
    .map(x => x.toLowerCase())
    .join('-');

const toFileData = (iconSet, iconName) => {
  const componentName = iconSet + iconName;
  const fileName = toKebabCase(componentName);
  const fileBody = `${warning}
import {${iconName}} from '@emotion-icons/material/${iconName}';
import {toNewsKitIcon} from '../../to-newskit-icon';

// The updated display name will be used to return the right icon in
// "to-newskit-icon.tsx", if it gets overridden
${iconName}['displayName'] = "${componentName}";

export const ${componentName} = toNewsKitIcon(${iconName});
`;
  return {fileName, fileBody, componentName};
};

const toExportStatement = file =>
  `export {${file.componentName}} from './${file.fileName}';`;

const createFolderIfMissing = iconSubfolder => {
  if (!fs.existsSync(`../../src/icons/${iconSubfolder}`)) {
    fs.mkdirSync(`../../src/icons/${iconSubfolder}`, {recursive: true});
  }
};

const generateIconFiles = (filesData, iconSubfolder) => {
  const iconsDirectory = '../../src/icons/';
  filesData.forEach(data =>
    fs.writeFile(
      `${iconsDirectory + iconSubfolder}/${data.fileName}.tsx`,
      data.fileBody,
      // eslint-disable-next-line
      err => err && console.error(err),
    ),
  );
};

const generateIndexFile = (filesData, iconSubfolder) => {
  const exportBody = [warning, ...filesData.map(toExportStatement)].join('\n');
  fs.writeFile(
    `../../src/icons/${iconSubfolder}/index.ts`,
    exportBody,
    // eslint-disable-next-line
    err => err && console.error(err),
  );
};

const generateFiles = (icons, iconSubfolder, namingPrefix = 'Icon') => {
  const filesData = icons.map(iconName => toFileData(namingPrefix, iconName));
  createFolderIfMissing(iconSubfolder);
  generateIconFiles(filesData, iconSubfolder);
  generateIndexFile(filesData, iconSubfolder);
};

// **
// KEEP UNCOMMENTED THE FUNCTION FOR THE ICONS YOU WANT TO GENERATE, then run "node generate-icons.ts"
// **

generateFiles(filledIcons, 'filled/material', 'IconFilled');
generateFiles(outlinedIcons, 'outlined/material', 'IconOutlined');
