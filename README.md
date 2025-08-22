# Gov Opportunity Aggregator

## 🚀 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/FranJL075/gov-opportunity-aggregator.git
cd gov-opportunity-aggregator

# 2. Create a .env file in the project root with your configuration
echo "SAM_API_KEY=YOUR_API_KEY_HERE" >> .env
echo "SLACK_WEBHOOK_URL=YOUR_WEBHOOK_HERE" >> .env

# 3. Start the application with Docker
docker-compose up

✅ What to Verify

JSON files are created correctly:

/data/cal_latest.json

/data/sam_latest.json

/data/unified.json

/data/enriched.json

Alerts are sent to Slack for each opportunity.

Console shows no critical errors.

📌 Development Notes

This project was built under tight deadlines, so some parts mix English and Spanish for simplicity and speed.

The main pipeline works end-to-end:

Scraping from Cal eProcure and SAM.gov (simulated)

Normalizing and enriching the data in JSON format

Automatic Slack alerts

Full orchestration via Docker Compose

Optional tasks pending:

Test coverage ≥ 70%

Exported low-code workflows (01_ingest.json … 05_notify.json)

Visual front-end (Airtable / Webflow interface)

## 🎬 Demo Video
Watch the walkthrough here: https://www.loom.com/share/3f6949e2846444b1b8ebe133d1281fa2?sid=2e134803-af55-4730-9505-8b0e0d77dffe
