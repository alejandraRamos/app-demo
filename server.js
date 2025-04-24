const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const APP_NAME = process.env.APP_NAME || "Default App";
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE || "Bienvenido!";
const FOOTER_TEXT = process.env.FOOTER_TEXT || "Powered by GitOps";
const SECRET1 = process.env.SECRET1 || "No disponible";
const SECRET2 = process.env.SECRET2 || "No disponible";

app.get("/", (req, res) => {
    res.send(`
      <html>
        <head>
          <title>${APP_NAME}</title>
        </head>
        <body>
          <h1>${WELCOME_MESSAGE}</h1>
          <p><strong>Secret1:</strong> ${SECRET1}</p>
          <p><strong>Secret2:</strong> ${SECRET2}</p>
          <p><strong>text222:</strong>"hola mundo"</p>
          <footer>${FOOTER_TEXT}</footer>
        </body>
      </html>
    `);
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
