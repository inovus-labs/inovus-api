# Inovus API
> The one ultimate API that all Inovus Fellows will ever need to build anything using its Community Database.

## About Us

[**Inovus Labs**](https://inovuslabs.org/) is a Student Community with the ideology relied around the core value of peer-to-peer learning & self-exploration. Since 2015 - the year it was formed, [**Inovus Labs**](https://inovuslabs.org/) had taken-up the responsibility of managing different entities like [**Innovation & Entrepreneurship Development Center (IEDC)**](https://iedc.startupmission.in/), [**TinkerHub KJCMT**](https://tinkerhub.org/), [**HackClub KJCMT**](https://kjcmt.hackclub.com/) & [**GTech µLearn**](https://mulearn.org/) at [**Kristu Jyoti College**](http://kjcmt.ac.in/).

## About Project

As a community of developers & makers, we do initiate small projects very often and most of which rely around community itself.

> This is a project to build an API that could gather, process & store data from different locations and delivers it securely to required projects. Infact, this Inovus API is built to facilitate different other projects that are under consideration.

This API performs the following functions:
- Gather data from multiple [**Firebase Real-time Databases**](https://firebase.google.com/), [**Google Sheets**](https://developers.google.com/sheets/api) & [**Discord API**](https://discord.js.org).
- Curate different data collections (Data Formating)
- Delivers required data securely via **JWT Authorized Routes** to different projects like [**Chacko Mash**](https://github.com/decoded-cipher/chacko-mash), [**Scrapbook**](https://github.com/decoded-cipher/scrapbook), **Inovus Profiles** & many more...

---

## API Documentation
> Here a list of available API routes that could deliver data securely.

### ⭐ Basic User Data
| Method | Endpoint | Parameter(s) | Auth | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/user` | `id` | ✅ | Get basic details of a particular user |

#### Response Example
```json
{
  "_id": "700005215654379562",
  "name": "Arjun Krishna",
  "email": "mail@arjunkrishna.in",
  "mobile": 9400057152,
  "gender": "Male",
  "dob": {
    "day": 4,
    "month": 5,
    "year": 1999
  },
  "department": "Master of Computer Application (MCA)",
  "college": "Kristu Jyoti College of Management and Technology",
  "admission": 2020,
  "interest": [
    "Web Designing",
    "Internet of Things",
    "Competitive Programming",
    "Graphic Designing",
    "Video Editing",
    "Creative Writing"
  ]
}
```

### ⭐ Extended User Data
| Method | Endpoint | Parameter(s) | Auth | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/user/ext` | `id` | ✅ | Get all details of a user including Discord Data |

#### Response Example
```json
{
  "_id": "700005215654379562",
  "name": "Arjun Krishna",
  "email": "mail@arjunkrishna.in",
  "mobile": 9400057152,
  "gender": "Male",
  "dob": {
    "day": 4,
    "month": 5,
    "year": 1999
  },
  "department": "Master of Computer Application (MCA)",
  "college": "Kristu Jyoti College of Management and Technology",
  "admission": 2020,
  "interest": [
    "Web Designing",
    "Internet of Things",
    "Competitive Programming",
    "Graphic Designing",
    "Video Editing",
    "Creative Writing"
  ],
  "discord": {
    "tag": "ArjunKrishna#9445",
    "avatar": "https://cdn.discordapp.com/avatars/700005215654379562/045daa81c2f645e801d1d83783fa1236.png"
  }
}
```

### ⭐ User(s) with Birthday(s) on a Date
| Method | Endpoint | Parameter(s) | Auth | Description |
| --- | --- | --- | --- | --- |
| `GET` | `/bday ` | `mm` `dd` | ✅ | Get the id(s) of user(s) who is having bday on the date |

#### Response Example
```json
[
  "620063590778535947",
  "912506693500432445",
  "913959672468344852"
]
```

### ⭐ Birthday(s) in a Month
| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/bday/:mm` | ✅ | Get the id(s) of the user(s) who is having bday on the month |

#### Response Example
```json
{
  "700005215654379562": {
    "Date of Birth": "1999-05-03T18:30:00.000Z",
    "Day": 4,
    "Discord User ID": "700005215654379562",
    "Month": 5,
    "Year": 1999
  },
  "756057795283124277": {...},
  "794859559344275466": {...},
  "841690740572028938": {...},
  "843036965234409472": {...},
  "843083939526213643": {...},
  "855753243874295839": {...},
  "913832883674824764": {...},
  "914065274288869376": {...},
  "914452839240204318": {...},
  "926059379818647622": {...}
}
```