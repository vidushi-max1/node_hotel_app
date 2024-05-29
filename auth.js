const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const person = require('./models/personmodel');

//authentication logic:
passport.use(new LocalStrategy(async(Username, Password, done) => {
    try {
        // console.log("You entered: ", Username, Password);
        const user = await person.findOne({ username: Username });
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }
        const isPasswordMatch = (user.password === Password) ? true : false;
        if (isPasswordMatch)
            return done(null, user);
        return done(null, false, { message: 'Incorrect password' });
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;