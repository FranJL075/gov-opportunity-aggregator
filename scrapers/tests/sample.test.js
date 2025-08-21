const fs = require('fs');
const path = require('path');

test('unified dataset exists', () => {
  // Construye la ruta absoluta a unified.json desde la carpeta scrapers
  const dataPath = path.join(__dirname, '../data/unified.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  expect(data.length).toBeGreaterThan(0);
});
