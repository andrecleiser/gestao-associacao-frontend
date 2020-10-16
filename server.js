const express = require('express');
const app = express();
app.use(express.static('./dist/ga'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/ga' });
  });

app.listen(process.env.PORT || 8080);