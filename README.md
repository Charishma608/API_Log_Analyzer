# API_Log_Analyzer
## A command-line tool to **analyze API logs from a JSON file**. It summarizes:

#### - 🔢 Most active IPs
#### - 📈 Top API endpoints
#### - 🚨 5xx server errors
#### - 📁 Outputs insights in JSON format

---

## 📁 Project Structure
```bash
api-log-analyzer/
├── analyze.js # Main analysis script
├── sample_api_logs.json # Sample input log file
├── output_summary.json  # Output generated after analysis
├── package.json
├── package-lock.json 
└── README.md
```

## 🧠 Approach

The script processes a log file formatted as an array of request objects. For each log:

1. ✅ It counts how many times each IP appears
2. ✅ It counts how often each endpoint is hit
3. 🚨 It extracts logs with HTTP status codes in the "5x" range

It then generates a summary with:

- **Top 5 most active IPs**
- **Top 5 API endpoints**
- **Count of total 5xx errors**
- **A few sample 5xx error logs**

#### The output is printed to the terminal and saved to `output_summary.json`.
---

## 📝 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Charishma608/API-Log-Analyzer.git
cd API-Log-Analyzer
```
### 2.Install dependencies
```bash
npm install
```
### 3. Run the server
```bash
node analyze.js
```




