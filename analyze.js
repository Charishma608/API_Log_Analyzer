const fs = require("fs");


const logs = JSON.parse(fs.readFileSync("sample_api_logs.json", "utf-8"));


const ipCounts = {};
const endpointCounts = {};
const fiveXxErrors = [];


logs.forEach((log) => {
  const { ip, endpoint, status } = log;

  // Count IPs
  ipCounts[ip] = (ipCounts[ip] || 0) + 1;

  // Count endpoints
  endpointCounts[endpoint] = (endpointCounts[endpoint] || 0) + 1;

  // 5xx errors
  if (status >= 500 && status < 600) {
    fiveXxErrors.push(log);
  }
});


const sortByCount = (obj) =>
  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({ key, count }));


const summary = {
  mostActiveIPs: sortByCount(ipCounts).slice(0, 5),
  topEndpoints: sortByCount(endpointCounts).slice(0, 5),
  total5xxErrors: fiveXxErrors.length,
  sample5xxErrors: fiveXxErrors.slice(0, 3), 
};


console.log(JSON.stringify(summary, null, 2));


fs.writeFileSync("output_summary.json", JSON.stringify(summary, null, 2));
