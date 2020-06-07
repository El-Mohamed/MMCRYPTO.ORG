# MMCRYPTO.ORG
On MMCRYPTO.ORG you can find realtime data, tools, charts (multiple timeframes) and more coming soon!

## Status
![GitHub contributors](https://img.shields.io/github/contributors/ElMoufid-Mohamed/MM-Crypto)
![GitHub last commit](https://img.shields.io/github/last-commit/ElMoufid-Mohamed/MM-Crypto)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ElMoufid-Mohamed/MM-Crypto)
![GitHub language count](https://img.shields.io/github/languages/count/ElMoufid-Mohamed/MM-Crypto)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fmmcrypto.org)
[![Build Status](https://dev.azure.com/elmoufidmohamed/MM-Crypto/_apis/build/status/ElMoufid-Mohamed.MMCRYPTO.ORG?branchName=master)](https://dev.azure.com/elmoufidmohamed/MM-Crypto/_build/latest?definitionId=8&branchName=master)

## Brave Publisher
Brave Verified, download the browser for free
<br><br><br>
<a href="https://brave.com/mmc473">
<img src="https://raw.githubusercontent.com/ElMoufid-Mohamed/MMCRYPTO.ORG/f3070d43f0a13b2bc3df4f39574f61ebc785e078/Web%20Application/MM-Crypto/src/assets/img/brave-bat-partnership.svg" width="300px">
</a>
<br> <br>

## Technologies
### Frontend
* Angular
* PrimeNG
* Apex Charts
* Auth0
### Backend
* SQL
* ASP.NET
* Entity Framework
* Auth0

## API Documentation
* [Postman Documentation](https://documenter.getpostman.com/view/11121025/Szf9V6zz?version=latest)
* [api.mmcrypto.org](http://api.mmcrypto.org/api/v1/assets)

## Docker
Each project has a Dockerfile

### Run Angular Project
```
$ docker build -t mm-crypto:v1 .
$ docker run -p 80:80 mm-crypto:v1
```
### Run ASP.NET API
```
$ docker build -t mm-crypto-backend:v1 .
$ docker run -d -p 82:8080 --name MM-Backend mm-crypto-backend:v1
```

## Database Setup
Create database-credentials.json
```
REST API/MM-Crypto/MM-Crypto/database-credentials.json
```
### MYSQL Connection

```
{
  "ConnectionStrings": {
    "DefaultConnection": "server=IP;database=DBNAME;uid=USER;password=PASSWORD"
  }
}
```
