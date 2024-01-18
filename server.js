const express = require('express');
const app = express();

// Serve static files from the public folder
app.use(express.static('public'));

// Endpoint for retrieving the images
app.get('/images', (req, res) => {
  // Return a list of images
  res.json([
    {
      url: 'https://images.unsplash.com/photo-1704775628393-7b277c110d88?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'View of mountains and trees covered in snow'
    },
    {
      url: 'https://images.unsplash.com/photo-1704658492989-e4a4d1db44ba?q=80&w=2070&=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Tree on top of a mountain with a sunset in the background'
    }
  ]);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
