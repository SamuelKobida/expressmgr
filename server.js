const express = require('express');
const app = express();
app.use(express.json());
const PORT=3000;

const router = require('./app/routes/router')
app.use('/', router)



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})