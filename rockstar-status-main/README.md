# Rockstar Services Status
 Simple Rockstar Games service status API wrapper

# Credits

Credits to Androz2091 for making a NPM package about this. I updated it to match the most recent API changes and added "🟢, 🟡, 🔴" icons that are used on the service status page.

# Example

Call the index file from your code and use the results
```js
const ServiceStatus = require('rockstar-status');

console.log(ServiceStatus) // Returns status for all services
console.log(ServiceStatus.redDedOnline) //Returns status for all RDR2 platforms
console.log(ServiceStatus.gtao.pc) //Returns service status for GTA:O PC platform

});
