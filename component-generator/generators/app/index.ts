// import {default as Generator} from 'yeoman-generator';
// import {addExportToIndex} from './helpers/add-export-to-index';
// import {createFileFromTemplate} from './helpers/create-file-from-template';
// import {prepareTemplateData} from './helpers/prepare-template-data';
// import {addLinkToSite} from './helpers/add-link-to-site';

// // interface ComponentGeneratorProps extends Generator {
// //   answers: unknown,
// // }

// export class ComponentGenerator extends Generator{

//   prompting() {
//     this.log('Welcome to Newskit component generator.');
//     const self = this;
//     return this.prompt([
//       {
//         type: 'input',
//         name: 'componentFileName',
//         message: 'Name of your component',
//       },
//     ]).then(answers => {
//       self.answers = answers;
//     });
//   }

//   writing() {
//     const {componentFileName} = this.answers;
//     this.log(componentFileName)
//     const componentName = componentFileName.split('-').map(element => {
//      return element.charAt(0).toUpperCase() + element.slice(1); 
//     }).join("");
//     const templatesData = prepareTemplateData(componentName, componentFileName);
    
//     // Change root to ./src
//     this.log(`Writing files into: ${this.destinationRoot('./src')}`);

//     // Add export for the new component in root index
//     const source = this.fs.read(this.destinationPath('index.ts'));
//     const {code} = addExportToIndex(source,componentFileName);
//     this.fs.write(this.destinationPath('index.ts'), code);

//     // Creating files from templates into ./src folder
//     templatesData.paths.forEach(templateData => {
//       createFileFromTemplate(this, templateData, templatesData.names);
//     });

//     // Change root to ./site
//     this.log(`Writing files into: ${this.destinationRoot('../site')}`);

//     // Add documentation page in ./site
//     createFileFromTemplate(this,{
//       templatePath: './documentation-page.mdx',
//       destinationPath: `./pages/components/${componentFileName}.mdx`,
//     },templatesData.names)

//     // Add link to documentation site
//     const routes = JSON.parse(this.fs.read(this.destinationPath('routes.json')));
//     const resultRoutes = addLinkToSite(routes, templatesData.names);
//     this.fs.write(this.destinationPath('routes.json'), resultRoutes);
//   }
// };
