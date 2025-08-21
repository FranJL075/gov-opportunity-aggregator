// Carga dotenv y lee variables del .env
require('dotenv').config({ path: './.env' });

// Prueba que se leyó correctamente
console.log("🔑 Usando SAM_API_KEY:", process.env.SAM_API_KEY);
