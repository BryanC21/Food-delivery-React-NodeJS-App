const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname, '..', '..', 'front-end/my-app/build')));
app.use(express.static(__dirname+'/../../front-end/my-app/build'))

app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, '..', '..', 'front-end/my-app/build', 'index.html'));
  res.sendFile(__dirname+'/../../front-end/my-app/build/index.html')
});

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Listening on port ${port}`);
