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
// ----- Firebase Config End -----


module.exports = {

    getUser : (id) => {
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

    getBday : (id) => {
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

    formatUserData : (id) => {
        return new Promise((resolve, reject) => {
            module.exports.getUser(id).then(user => {
                module.exports.getBday(id).then(bday => {
                    var data = {
                        _id : user['Discord User ID'],
                        name : user['Full Name'],
                        email : user.Email,
                        mobile : user['Mobile (WhatsApp)'],
                        gender : user.Gender,
                        dob : {
                            day : bday.Day,
                            month : bday.Month,
                            year : bday.Year
                        },
                        department : user.Department,
                        college : user.College,
                        admission : user['Year of Admission'],
                        interest : user['Area of Interest'].split(', '),
                    }
                    resolve(data)
                })
            }).catch(err => {
                reject(err)
            })
        })
    }

}