const fs = require('fs');

// Leer el JSON unificado
const data = JSON.parse(fs.readFileSync('./data/unified.json'));

// Función rápida para asignar serviceLine basado en palabras clave del título
function enrichLocal(op) {
  if (!op.serviceLine) {
    const title = op.title.toLowerCase();
    if (title.includes("cal")) op.serviceLine = "Consultoría";
    else if (title.includes("sam")) op.serviceLine = "Tecnología";
    else op.serviceLine = "General";
  }
  return op;
}

// Enriquecer todos los registros
const enriched = data.map(enrichLocal);

// Guardar el JSON enriquecido
fs.writeFileSync('./data/enriched.json', JSON.stringify(enriched, null, 2));

console.log(`Enriched dataset (local): ${enriched.length} records`);
