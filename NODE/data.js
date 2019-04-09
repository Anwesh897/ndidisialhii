const fs = require('fs');

fs.appendFile('data.txt', `${process.argv[1]}\n`, function(err) {
  fs.readFile('data.txt', function(err, data) {
    console.log(data.toString());
  });
});