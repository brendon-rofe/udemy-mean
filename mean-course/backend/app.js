const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: '8ad477add', title: 'First server-side Post', content: 'This is coming from the server' },
    { id: '86jlajwdk', title: 'Second server-side Post', content: 'This is also coming from the server' }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;