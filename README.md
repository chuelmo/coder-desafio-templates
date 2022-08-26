# coder-desafio-templates
Construir un web server No Rest que utilizando la API de la clase anterior incorpore plantillas, handlebars, ejs, pug

## Desafio 5
- Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
  - Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
  - Una vista de los productos cargados (utilizando plantillas de  handlebars) en la ruta GET '/productos'.
  - Ambas páginas contarán con un botón que redirija a la otra.

- Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
- Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.
- Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.

### El desafio se corre con: node index-hbs.js or node index-ejs.js or node index-pug.js