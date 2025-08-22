// Carga dotenv y lee variables del .env
require('dotenv').config({ path: './.env' });
const fs = require('fs');

console.log("🔑 Usando SAM_API_KEY:", process.env.SAM_API_KEY);

// Simulamos oportunidades de SAM
const baseSam = [
  { title: "Oportunidad SAM 1", url: "https://example.com/sam1", dueDate: "2025-08-28" },
  { title: "Oportunidad SAM 2", url: "https://example.com/sam2", dueDate: "2025-09-03" }
];

// Duplicamos hasta 20 copias = 40 registros
let samOpportunities = [];
for (let i = 0; i < 20; i++) {
  baseSam.forEach((op, idx) => {
    samOpportunities.push({
      ...op,
      title: `${op.title} - copia ${i}-${idx}`
    });
  });
}

// Crear carpeta data si no existe
if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data');
}

fs.writeFileSync('./data/sam_latest.json', JSON.stringify(samOpportunities, null, 2));
console.log(`Archivo sam_latest.json creado con ${samOpportunities.length} registros`);
