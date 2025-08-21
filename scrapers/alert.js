require('dotenv').config();
const axios = require('axios');
const path = require('path');
const data = require(path.join(__dirname, '../data/enriched.json'));

data.slice(0,5).forEach(async op => {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `Nueva oportunidad: ${op.title}\n${op.url}\nService Line: ${op.serviceLine}`
    });
    console.log(`Alerta enviada: ${op.title}`);
  } catch (error) {
    console.error(`Error enviando alerta: ${op.title}`, error.message);
  }
});
