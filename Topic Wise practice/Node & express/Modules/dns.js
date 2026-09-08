const dns = require('dns');
// Resolve a domain name to an array of IP addresses
dns.lookup('google.com', (err, address, family) => {
  if (err) throw err;
  console.log(`IP Address for google.com: ${address}`);
  console.log(`IP Family: ${family}`); 
});

// Resolve all records for a domain
dns.resolve4('google.com', (err, addresses) => {
  if (err) throw err;
  console.log(`All IPv4 addresses for google.com:`, addresses);
});
