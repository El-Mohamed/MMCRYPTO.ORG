# MM Crypto

## Status
![GitHub contributors](https://img.shields.io/github/contributors/ElMoufid-Mohamed/MM-Crypto)
![GitHub last commit](https://img.shields.io/github/last-commit/ElMoufid-Mohamed/MM-Crypto)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ElMoufid-Mohamed/MM-Crypto)
![GitHub language count](https://img.shields.io/github/languages/count/ElMoufid-Mohamed/MM-Crypto)
[![Build Status](https://dev.azure.com/elmoufidmohamed/MM-Crypto/_apis/build/status/CI%20Pipeline?branchName=master)](https://dev.azure.com/elmoufidmohamed/MM-Crypto/_build/latest?definitionId=4&branchName=master)
[![Build Status](https://dev.azure.com/elmoufidmohamed/MM-Crypto/_apis/build/status/CD%20Pipeline?branchName=release)](https://dev.azure.com/elmoufidmohamed/MM-Crypto/_build/latest?definitionId=7&branchName=release)


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

## SQL Database
Create database-credentials.json
```
REST API/MM-Crypto/MM-Crypto/database-credentials.json
```
## Cloud

```
{
  "ConnectionStrings": {
    "DefaultConnection": "server=IP;database=DBNAME;uid=USER;password=PASSWORD"
  }
}
```
