This project is the backend service for EzyMetrics, focusing on data integrations and reporting for CRM and marketing platforms. It includes API services for fetching and creating lead and campaign data, data storage in MongoDB, and reporting.


Features:
-Leads Management: API endpoints to fetch and create leads.
-Campaigns Management: API to fetch marketing campaign data.
-MongoDB Integration: MongoDB is used to store and manage data.
-Alerting Mechanism: Basic alert templates for system monitoring (can be extended).
-Data Transformation: Uses an ETL process to transform raw data into meaningful metrics.


Technologies Used:
-Node.js: Backend runtime environment.
-Express.js: Web framework for building APIs.
-MongoDB: NoSQL database for storing leads and campaigns.
-Mongoose: ODM library for MongoDB.
-Postman: For API testing.
-dotenv: For environment variable management.


Installation:
1. Clone the repository: `git clone https://github.com/inoorhayat/EzyMetrics_noor.git
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string and other environment variables.
   PORT=5000
   MONGODB_URI=mongodb://your_mongodb_uri
4. Start the server: `npm start`
5. Use Postman to test API endpoints.


Testing the API
You can use Postman to test the API endpoints.

-GET Leads: Make a GET request tohttp: //localhost:5000/api/crm/leads.
-POST Lead: Make a POST request to http: //localhost:5000/api/reports/generate. 
with the required lead data in the body (JSON format).
-GET Campaigns: Make a GET request to http: //localhost:5000/api/marketing/campaigns.
