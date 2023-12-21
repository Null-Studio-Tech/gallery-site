import fs from "fs";
import Fontmin from "fontmin";
import rename from "gulp-rename";
let set = new Set();

//get all possible characters
const scanFolder = (dir, done) => {
  let results = [];
  dir.forEach(path => {
    const list = fs.readdirSync(path);
    list.forEach((file) => {
      file = path + '/' + file;
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        const fileList = scanFolder([file]);
        results.push(...fileList);
      } else {
        results.push(file);
      }
    });
  });
  return results;
};

//get all possible characters
const generateFinalHTML = finalString => {
  const fontmin = new Fontmin()
    .src('src/assets/fonts/SourceHanSansSC-VF.ttf')
    .use(rename('SourceHanSansSC-VF.min.ttf'))
    .use(Fontmin.glyph({
      text: finalString,
      hinting: false
    }))
    .dest('src/assets/fonts')


  fontmin.run((err) => {
    if (err) {
      throw err;
    }
  });
}

//get all possible characters
const init = (dir) => {
  const results = scanFolder(dir);
  results.forEach(file => {
    const result = fs.readFileSync(file, 'utf8');
    const currentSet = new Set(result)
    set = new Set([...set, ...currentSet]);
  });
  generateFinalHTML(Array.from(set).join(""))
}
init(["src/data", "src/content"])
// ["src/data", "src/content"].forEach(dir => {
//   let results = [];
//   console.log(dir)
//   fs.readdirSync(dir)
// })
