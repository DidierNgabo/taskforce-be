### SETTING UP

use [NODE 12.X]

- clone this repo and cd to the working directory
- install dependencies by `npm install`
- start the app in development mode `npm start`
- running tests `npm test`
- running tests coverage `npm run coverage`
- running migrations `npm run db:migrate`
- running seeders `npm run db:seed`

### .env SAMPLE

PORT = port

DB_NAME_DEV= taskforcedb_dev
DB_USER_DEV= qvhnrokw
DB_PASSWORD_DEV = 2qm7EREAvbmmgG6a_F4byAFCvpAqQP9a
DB_HOST_DEV = ruby.db.elephantsql.com

DB_NAME_TEST= taskforcetestdb
DB_USER_TEST= postgres
DB_PASSWORD_TEST = password
DB_HOST_TEST = localhost

#### Run in docker

```bash

docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# View containers
docker container ls -a

# Remove container
docker container rm <container id>

# To re-build
docker-compose build
```
