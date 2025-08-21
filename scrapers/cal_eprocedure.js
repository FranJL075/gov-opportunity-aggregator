// scrapers/cal_eprocedure.js
const fs = require('fs');

const calOpportunities = [
  { title: "Oportunidad Cal 1", url: "https://example.com/cal1", dueDate: "2025-08-25" },
  { title: "Oportunidad Cal 2", url: "https://example.com/cal2", dueDate: "2025-09-01" }
];

// Crear carpeta data si no existe
if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data');
}

fs.writeFileSync('./data/cal_latest.json', JSON.stringify(calOpportunities, null, 2));
console.log(`Archivo cal_latest.json creado con ${calOpportunities.length} registros`);
