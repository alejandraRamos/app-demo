const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const APP_NAME = process.env.APP_NAME || "Default App";
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE || "Bienvenido!";
const FOOTER_TEXT = process.env.FOOTER_TEXT || "Powered by GitOps";

app.get("/", (req, res) => {
    res.send(`
      <html>
        <head>
          <title>${APP_NAME}</title>
        </head>
        <body>
          <h1>${WELCOME_MESSAGE}</h1>
          <footer>${FOOTER_TEXT}</footer>
        </body>
      </html>
    `);
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
