module.exports = () => {
  const LocalStrategy = require('passport-local').Strategy,
    passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    localOptions = {
      usernameField: 'login',
      passwordField: 'password'
    };
  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
  };
  /**
   * @description Definição da regra local que será utilizada para validação através de email e senha
   * @param
   *
   **/
  passport.use(new LocalStrategy(localOptions, (email, senha, done) => {

    console.log('LOGIN', email, senha);

    // getUserByEmailSenha(email, senhaEncrypted).then((user) => {

    //     if (user) {
    return done(null, 'user');
    //     }

    //     return done(null, false);
    // }).catch((err) => done(err.message, false));
  }));

  /**
   * @description Definição da regra jwt que será utilizada para validação através do jwt
   * @return {sting}          [string do hash informado]
   */
  passport.use(new JwtStrategy(opts, (payload, done) => {
    try {
      return done(null, 'token');

    } catch (err) {
      return done(err.message, false);
    }
  }));

  return passport;
};