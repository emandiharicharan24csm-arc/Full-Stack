//Read file synchronously
const fs = require('fs');
try {
  const data = fs.readFileSync('task.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

//write file synchronously
try {
  fs.writeFileSync('newfile.txt', 'This is new content.');
  console.log('File saved synchronously.');
} catch (err) {
  console.error(err);
}

//append file synchronously
try {
  fs.appendFileSync('task.txt', '\nThis is appended content.');
  console.log('Content appended synchronously.');
} catch (err) {
  console.error(err);
}

//delete file synchronously

fs.unlink('filetodelete.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});

//Check if file exists synchronously
const fileExists = fs.existsSync('task.txt');
console.log(`File exists: ${fileExists}`);
