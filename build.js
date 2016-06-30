import handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import ncp from 'ncp';
import cssmin from 'cssmin';

const currentPath = path.resolve('.');
const componentsPath = `${currentPath}/src/components`;
const buildFolders = ['styles', 'javascripts'];
const copiedBuildFolders = ['assets'];
const handlebarsContext = {
  head: fs.readFileSync(`${componentsPath}/head.html`, 'utf-8'),
  footer: fs.readFileSync(`${componentsPath}/footer.html`, 'utf-8')
}

// Setup build folder
mkdirp(`${currentPath}/build`, err => {
  buildFolders.map(folder => mkdirp(`${currentPath}/build/${folder}`));
  copiedBuildFolders.map(folder =>
    ncp(`${currentPath}/src/${folder}`, `${currentPath}/build/${folder}`)
  );
});

// Write HTML file to build folder
function writeFileToBuild(fileNameOrPath, contents) {
  fs.writeFile(`${currentPath}/build/${fileNameOrPath}`, contents);
}

/**
 * HTML
 */
fs.readdir(`${currentPath}/src/`, (err, files) => {
  if (err) {
    throw new Error('Error when reading directory');
  }

  files.filter(file => /\.html$/.test(file))
    .forEach(file => fs.readFile(`${currentPath}/src/${file}`, 'utf-8', (err, contents) => {
      if (err) {
        throw new Error('Error when reading file', err);
      }
      const templatedHTML = handlebars.compile(contents)(handlebarsContext);
      writeFileToBuild(file, templatedHTML);
    }));
});

/**
 * CSS
 */
fs.readdir(`${currentPath}/src/styles`, (err, files) => {
  if (err) {
    throw new Error('Error when reading directory');
  }

  files.forEach(file => fs.readFile(`${currentPath}/src/styles/${file}`, 'utf-8', (err, contents) => {
    if (err) {
      throw new Error('Error when reading file', err);
    }
    const minifiedCSS = cssmin(contents);
    writeFileToBuild(`styles/${file}`, minifiedCSS);
  }));
});
