module.exports = () => {
    const LocalStrategy = require('passport-local').Strategy,
        passport = require('passport'),
        JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt,
        //secret = require('../../config/email.json').token.key,
        // { getUserByEmailSenha } = require('../service/usuario'),
        // { findByUsuarioPerfil } = require('../repository/usuario'),
        { decrypt, encrypt, getMD5 } = require('../../utils'),

        localOptions = {
            usernameField: 'login',
            passwordField: 'password'
        };
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = 12234;
    /**
     * @description Definição da regra local que será utilizada para validação através de email e senha
     * @param
     *
     **/
    passport.use(new LocalStrategy(localOptions, (email, senha, done) => {

        console.log('LOGIN', email, senha)
        // const senhaDecrypt = decrypt(senha, true),
        //     senhaEncrypted = encrypt(getMD5(senhaDecrypt), true);

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
            const auth = JSON.parse(decrypt(payload.auth)),
                perfilId = auth.perfil,
                usuarioId = auth.usuario,
                tipo = auth.tipo;

            // findByUsuarioPerfil(usuarioId, perfilId).then((usuario) => {

            //     if (!usuario || !usuario.perfil || !usuario.perfil.length) {
            //         return done(null, false);
            //     }

            //     if (tipo === 'change-password') {
            //         // console.log('change: ', tipo);
            //     }

            //     return done(null, usuario);
            // }).catch((err) => done(err, false, { message: 'Usuário não autorizado' }));

        } catch (err) {
            return done(err.message, false);
        }
    }));

    return passport;
};