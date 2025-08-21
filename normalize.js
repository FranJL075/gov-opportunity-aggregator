const fs = require('fs');

const cal = JSON.parse(fs.readFileSync('./data/cal_latest.json'));
const sam = JSON.parse(fs.readFileSync('./data/sam_latest.json'));

function normalize(op) {
  return {
    title: op.title,
    url: op.url,
    dueDate: new Date(op.dueDate).toISOString(),
    source: op.source || 'Unknown'
  };
}

const all = [...cal, ...sam].map(normalize);

fs.writeFileSync('./data/unified.json', JSON.stringify(all, null, 2));
console.log(`Unified dataset: ${all.length} records`);
