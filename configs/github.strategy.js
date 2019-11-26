const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "7252e170e4ec5887dfac",
      clientSecret: "a71dbf241060c16a145d402a111adb01ee00034a",
      callbackURL: "https://armazena-arquivo.herokuapp.com/"
    },
    function(accessToken, refreshToken, profile, done) {
      const onError = () => {
        console.log('Ocorreu um erro!')
      }

      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  const onError = () => {
    console.log('Ocorreu um erro!')
  }

  done(undefined, user);
});
