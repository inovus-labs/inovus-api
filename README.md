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
  "855313973759180841": {
    "Date of Birth": "2001-11-20T18:30:00.000Z",
    "Day": 21,
    "Discord User ID": "855313973759180841",
    "Month": 11,
    "Year": 2001
  },
  "868429195452248125": {
    "Date of Birth": "2002-11-05T18:30:00.000Z",
    "Day": 6,
    "Discord User ID": "868429195452248125",
    "Month": 11,
    "Year": 2002
  },
  "907573888777617421": {
    "Date of Birth": "2001-11-04T18:30:00.000Z",
    "Day": 5,
    "Discord User ID": "907573888777617421",
    "Month": 11,
    "Year": 2001
  },
  "917614730120687667": {
    "Date of Birth": "2003-11-13T18:30:00.000Z",
    "Day": 14,
    "Discord User ID": "917614730120687667",
    "Month": 11,
    "Year": 2003
  }
}
```