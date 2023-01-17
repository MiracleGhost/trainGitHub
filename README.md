## How to start the Project locally?

1. install Node >= 14.0.0 and npm >= 5.6
2. fork or clone this repo
3. run in the root folder `npm i`

## Start
In the project directory, you can run:

- `npm start`
## Test
- `npm test`

## Build
-  `npm run build`
Builds the app for production to the `build` folder.\

### Deployment health status on Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/d970d231-098d-42b7-ba27-11da29fad47b/deploy-status)](https://app.netlify.com/sites/glittering-dango-8f0cb8/deploys)

## Our Website: [Elevate!](https://glittering-dango-8f0cb8.netlify.app/)

### Credentials:

| Platform | Responsible          |
| -------- | -------------------- |
| Netlify  | ask -> @MiracleGhost |
| Sentry   | ask -> @MiracleGhost |

### DevOps:
There are two `.yaml` files. First one is for develop and second one is for master. 
- `develop_deploy.yaml` - just make test & build, nothing more.
- `master_deploy.yaml` After push into master, it will be automatically build and deploy to - Netlify once build is successful. 
- Sentry will be notified automatically once build is successful. 
- **Publish process also disabled and needs to be done manually**
### Integration with Netlify:
Original deployment & publish process was disabled. Instead of this we use GitHub Actions for Deploy & Hook for Build.

### Integration with Sentry:
Default integraton provide from Sentry per [BrowserTracing](https://docs.sentry.io/platforms/javascript/performance/instrumentation/automatic-instrumentation/)