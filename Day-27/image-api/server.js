const express = require('express');
const app = express();

// Define an array of image URLs
const images = [
  'https://github.com/Jeevan1310/iotbootcamp/assets/81223681/9541c2f3-7528-4b39-8c46-1fcfb348b4bb',
  'https://github.com/Jeevan1310/iotbootcamp/assets/81223681/e9dce206-a7e3-4882-b914-2051ad517d2b',
  'https://github.com/Jeevan1310/iotbootcamp/assets/81223681/94725363-7203-4c2b-a03e-e5f738d156d8',
  // Add more image URLs as needed
];

// Route to get all images
app.get('/api/images', (req, res) => {
  res.json(images);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
