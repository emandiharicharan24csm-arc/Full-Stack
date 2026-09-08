//Read file asynchronously
const fs = require('fs');
fs.readFile('task.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); 
});

//write file asynchronously
const content = 'This is new content for the file.';
fs.writeFile('newfile.txt', content, err => {
  if (err) throw err;
  console.log('File has been saved!');
});

//append file asynchronously
fs.appendFile('example.txt', '\nThis is appended content.', err => {
  if (err) throw err;
  console.log('Content appended!');
});

//delete file asynchronously
fs.unlink('filetodelete.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});

//Check if file exists asynchronously
fs.access('example.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.log('File does not exist.');
  } else {
    console.log('File exists.');
  }
});
