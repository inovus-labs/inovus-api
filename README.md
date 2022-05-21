# Inovus API
The one ultimate API that all Inovus Fellows will ever need to build anything using its Community Database.


### Basic User Data
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

### Extended User Data
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

### User(s) with Birthday(s) on a Date
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

### Birthday(s) on a Month
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