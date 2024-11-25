const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const PORT = process.env.PORT || 3000;

    mongoose.connect('mongodb://localhost:27017/plumevocale', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.get('/', (req, res) => {
      res.send('Backend is running');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
