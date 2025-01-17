# name-forge

[![npm version](https://badge.fury.io/js/name-forge.svg)](https://badge.fury.io/js/name-forge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/Keith3895/name-forge/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Keith3895/name-forge/actions/workflows/node.js.yml)
[![Node.js Package](https://github.com/Keith3895/name-forge/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Keith3895/name-forge/actions/workflows/npm-publish.yml)
[![CodeQL](https://github.com/Keith3895/name-forge/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/Keith3895/name-forge/actions/workflows/github-code-scanning/codeql)

> A powerful npm package for generating unique and creative names.

## Installation
    
```bash
npm install name-forge
```

## Usage
    
```javascript
const nameForge = require('name-forge');
firstName = nameForge.firstName(<countryCode>,<Gender>);
surname = nameForge.surname(<countryCode>,<Gender>);
fullName = nameForge.fullName(<countryCode>,<Gender>);
```

### Supported countries and country codes:

| Country    | Country Code |
|------------|--------------|
| Argentine  | AR           |
| Austrian   | AT           |
| Belgium    | BE           |
| Brazilian  | BR           |
| Czech      | CZ           |
| German     | DE           |
| Danish     | DK           |
| Spanish    | ES           |
| Finnish    | FI           |
| French     | FR           |
| British    | GB           |
| Indonesian | ID           |
| Indian     | IN           |
| Italian    | IT           |
| Mexican    | MX           |
| Dutch      | NL           |
| Norwegian  | NO           |
| Polish     | PL           |
| American   | US           |
| Egyptian   | EG           |
| Japanese   | JP           |
| Bolivian   | BO           |
| Kenyan     | KE           |
| Somali     | SO           |

## Development

```bash
git clone git@github.com:Keith3895/name-forge.git
cd name-forge
npm install
npm test
```


