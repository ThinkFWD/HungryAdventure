const passport = require('passport');

module.exports = {
  localAccept: (req, res) => {
    res.redirect(`/users/${req.user.username}`);
  },

  authLogin: (req, res) => {
    res.render('login');
  },

  authLoginFacebook: () => {
    passport.authenticate('facebook');
  },

  authLoginFacebookReturn: (req, res) => {
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    };
  },

  authProfile: (req, res) => {
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      res.render('profile', { user: req.user });
    };
  },
};
