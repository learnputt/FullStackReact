const passport = require('passport');  //original npm module
module.exports = (app) => {


//first route handler to kick users into Oauth flow
app.get('/auth/google', passport.authenticate
         ('google', {scope: ['profile', 'email']}
         )
       );


//second route handler
app.get('/auth/google/callback', passport.authenticate
         ('google'));
};
