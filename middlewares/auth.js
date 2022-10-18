const { auth } = require('express-oauth2-jwt-bearer')


// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.REACT_APP_AUDIENCE,
    issuerBaseURL: process.env.REACT_APP_DOMAIN,
  });


module.exports = checkJwt