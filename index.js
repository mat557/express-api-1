const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/v1/user.route.js");

app.use(cors());
app.use(express.json());



app.use('/api/v1/users',usersRoute);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app is listening from port ${port}`)
})