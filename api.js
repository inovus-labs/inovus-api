const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.DISCORDJS_BOT_TOKEN);

var jwt = require('jsonwebtoken');

// ----- Firebase Config Start -----
var admin = require("firebase-admin");
var serviceAccount = require("./firebase-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});

var database = admin.database()
var memberData = database.ref(process.env.FIREBASE_DATABASE_PATH)
var birthdayData = database.ref(process.env.FIREBASE_BDAY_PATH)
var profileData = database.ref(process.env.FIREBASE_PROFILE_PATH)
// ----- Firebase Config End -----


module.exports = {

    getUser: (id) => {
        return new Promise((resolve, reject) => {
            memberData.child(id).once('value', (snapshot) => {
                if (snapshot.val() != null) {
                    resolve(snapshot.val())
                } else {
                    reject('User not found')
                }
            })
        })
    },

    getBday: (id) => {
        return new Promise((resolve, reject) => {
            birthdayData.child(id).once('value', (snapshot) => {
                if (snapshot.val() != null) {
                    resolve(snapshot.val())
                } else {
                    reject('Data not found')
                }
            })
        })
    },

    formatUserData: (id) => {
        return new Promise((resolve, reject) => {
            module.exports.getUser(id).then(user => {
                module.exports.getBday(id).then(bday => {
                    var data = {
                        _id: user['Discord User ID'],
                        name: user['Full Name'],
                        email: user.Email,
                        mobile: user['Mobile (WhatsApp)'],
                        gender: user.Gender,
                        dob: {
                            day: bday.Day,
                            month: bday.Month,
                            year: bday.Year
                        },
                        department: user.Department,
                        college: user.College,
                        admission: user['Year of Admission'],
                        interest: user['Area of Interest'].split(', '),
                    }
                    resolve(data)
                })
            }).catch(err => {
                reject(err)
            })
        })
    },

    getExtUserData: (id) => {
        return new Promise((resolve, reject) => {
            module.exports.formatUserData(id).then(async user => {
                await client.users.fetch(id).then(d_data => {
                    user.discord = {
                        tag: d_data.tag,
                        avatar: 'https://cdn.discordapp.com/avatars/' + d_data.id + '/' + d_data.avatar + '.png',
                    }
                    resolve(user)
                })
                resolve(user)
            }).catch(err => {
                reject(err)
            })
        })
    },

    getBdayUser: (date, month) => {
        return new Promise((resolve, reject) => {
            birthdayData.once('value', async (snapshot) => {

                var data = [];
                var bDayData = await snapshot.val();
                for (var key in bDayData) {
                    var bDayMonth = bDayData[key].Month;
                    var bDayDay = bDayData[key].Day;

                    if (bDayMonth == month && bDayDay == date) {
                        data.push(key)
                    }
                }

                if (data.length == 0) {
                    reject('No data found')
                } else {
                    resolve(data)
                }
            })

        })
    },

    getBdaysByMonth: (month) => {
        return new Promise((resolve, reject) => {
            birthdayData.once('value', async (snapshot) => {

                var data = {};
                var bDayData = await snapshot.val();
                for (var key in bDayData) {
                    if (bDayData[key].Month == month) {
                        data[key] = bDayData[key]
                    }
                }

                if (data.length == 0) {
                    reject('No data found')
                } else {
                    resolve(data)
                }
            })
        })
    },

    checkAuth: (req, res, next) => {
        var token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(401).send({
                auth: false,
                message: 'No token provided.'
            });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(500).send({
                    auth: false,
                    message: 'Failed to authenticate token.'
                });
            }
            next();
        });
    },

    getProfileData: (id) => {
        return new Promise((resolve, reject) => {
            module.exports.formatUserData(id).then(user => {
                profileData.child(id).once('value', (snapshot) => {
                    if (snapshot.val() != null) {
                        var data = snapshot.val()

                        user.profile = {
                            bio: data['User Bio'],
                            tagline: data['User Tagline'],
                            image: 'https://lh3.googleusercontent.com/d/' + data['Upload Photo'].split('=').pop(),
                            socials: {
                                instagram: data['Instagram Profile'].split('/').pop(),
                                twitter: data['Twitter Handle'].split('/').pop(),
                                linkedin: data['LinkedIn Profile'].split('/').pop(),
                                github: data['GitHub Account'].split('/').pop()
                            }
                        }

                        resolve(user)
                    } else {
                        reject('Data not found')
                    }
                })
            }).catch(err => {
                reject(err)
            })
        })
    }

}