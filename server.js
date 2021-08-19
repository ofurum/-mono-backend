const express = require('express');
const routes = require("./src/route");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
const cors = require("cors");
const app = express();


app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-type, Accept, Authorization"
    );
    if (req.method === "OPTION") {
      res.header("Access-Control-Allow-Methods", "*");
      return res.status(200).json({});
    }
    next();
});



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routes)


const port = process.env.PORT || 8000;

app.listen(port, console.log(`listening on port ${port}....`));