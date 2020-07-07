const parser = require("babylon");
const traverse = require("@babel/traverse").default;
const t = require('babel-types');
const generate = require('babel-generator').default;

let lastExport = null;
let isInserted = false;



const findingLastExport = (traverse,ast) => {
  traverse(ast, {
  ExportDeclaration(path) {
    lastExport = path;
  },
  });
}

const addingNewImport = (traverse,ast,exportAllDeclaration) => {
  traverse(ast, {
    // Gets called when visiting *any* node
    enter(path) {
      if (lastExport && t.isExportAllDeclaration(path) && !isInserted) {
        lastExport.insertAfter(exportAllDeclaration);
        isInserted = true;
      }
    },
  });
}

module.exports  = (source, componentName) => {
    
    const ast = parser.parse(source, { sourceType: 'module' });
    const exportAllDeclaration = t.exportAllDeclaration(t.stringLiteral(`./${componentName}`));

    findingLastExport(traverse,ast)
    addingNewImport(traverse,ast,exportAllDeclaration)
    return generate(ast, {}, source);
};