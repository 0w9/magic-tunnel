#!/usr/bin/env node
'use strict';

const { ArgumentParser } = require('argparse');
const { version } = require('../package.json');
const fs = require('fs')

const parser = new ArgumentParser({
    description: 'The easiest way to create a tunnel between your subdomains and local ports.',
});

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-p', '--port', { help: 'The port to map to.', type: Number, required: true });
parser.add_argument('-s', '--subdomain', { help: 'The subdomain to map to.', type: String, required: true });

console.dir(parser.parse_args());

var { port, subdomain } = parser.parse_args();
subdomain = subdomain.toLowerCase();

if(port == NaN || subdomain == NaN) {
    console.error('Port and subdomain must be numbers.');
    process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync('mapping.json'));
const foundMappings = mapping.find(x => x.port == port || x.subdomain == subdomain)

if(foundMappings) {
    console.error('Port and subdomain already mapped.');
    process.exit(1);
}

mapping.push({
    port: port,
    subdomain: subdomain
})

fs.writeFileSync('mapping.json', JSON.stringify(mapping, null, 2));

console.log('Port and subdomain mapped.');