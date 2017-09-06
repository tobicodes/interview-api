# Examples

### Seasons

```json
[
  {
    "seasonName": "Summer",
    "startMonth": 4,
    "startDay": 1,
    "endMonth": 8,
    "endDay": 31,
    "periods": [
      {
        "periodName": "Work",
        "fromDayOfWeek": 0,
        "toDayOfWeek": 4,
        "fromHour": 9,
        "toHour": 17,
        "fromMinute": 0,
        "toMinute": 0
      },
      {
        "periodName": "Play",
        "fromDayOfWeek": 4,
        "toDayOfWeek": 0,
        "fromHour": 0,
        "toHour": 0,
        "fromMinute": 0,
        "toMinute": 0
      },
      {
        "periodName": "Play",
        "fromDayOfWeek": 0,
        "toDayOfWeek": 4,
        "fromHour": 17,
        "toHour": 9,
        "fromMinute": 0,
        "toMinute": 0
      }
    ]
  },
  {
    "seasonName": "Winter",
    "startMonth": 9,
    "startDay": 1,
    "endMonth": 3,
    "endDay": 31,
    "periods": [
      {
        "periodName": "Work",
        "fromDayOfWeek": 0,
        "toDayOfWeek": 4,
        "fromHour": 9,
        "toHour": 17,
        "fromMinute": 0,
        "toMinute": 0
      },
      {
        "periodName": "Play",
        "fromDayOfWeek": 4,
        "toDayOfWeek": 0,
        "fromHour": 0,
        "toHour": 0,
        "fromMinute": 0,
        "toMinute": 0
      },
      {
        "periodName": "Play",
        "fromDayOfWeek": 0,
        "toDayOfWeek": 4,
        "fromHour": 17,
        "toHour": 9,
        "fromMinute": 0,
        "toMinute": 0
      }
    ]
  }
]
```

### Test 1

#### Request

`http://localhost:8080/api/seasons/?startTime=2017-04-01T00:00:00.000Z&endTime=2017-04-01T00:17:00.000Z`

#### Response

```json
[
  {
    "startTime": "2017-04-01T00:00:00.000Z",
    "endTime": "2017-04-01T09:00:00.000Z",
    "season": "Summer",
    "period": "Play"
  },
  {
    "startTime": "2017-04-01T09:00:00.000Z",
    "endTime": "2017-04-01T17:00:00.000Z",
    "season": "Summer",
    "period": "Work"
  }
]
```

### Test 2

#### Request

`http://localhost:8080/api/seasons/?startTime=2017-12-31T10:11:00.000Z&endTime=2018-01-01T20:12:34.560Z`

#### Response

```json
[
  {
    "startTime": "2017-12-31T10:11:00.000Z",
    "endTime": "2018-01-01T09:00:00.000Z",
    "season": "Winter",
    "period": "Play"
  },
  {
    "startTime": "2018-01-01T09:00:00.000Z",
    "endTime": "2018-01-01T17:00:00.000Z",
    "season": "Winter",
    "period": "Work"
  },
   {
     "startTime": "2018-01-01T17:00:00.000Z",
     "endTime": "2018-01-01T20:12:34.560Z",
     "season": "Winter",
     "period": "Play"
   }
]
```

### Test 3

#### Request

`http://localhost:8080/api/seasons/?startTime=2017-08-31T12:00:00.000Z&endTime=2017-09-01T00:12:00.000Z`

#### Response

```json
[
  {
    "startTime": "2017-08-31T12:00:00.000Z",
    "endTime": "2017-08-31T17:00:00.000Z",
    "season": "Summer",
    "period": "Work"
  },
  {
    "startTime": "2017-08-31T17:00:00.000Z",
    "endTime": "2017-09-01T00:00:00.000Z",
    "season": "Summer",
    "period": "Play"
  },
  {
    "startTime": "2017-09-01T00:00:00.000Z",
    "endTime": "2017-09-01T09:00:00.000Z",
    "season": "Winter",
    "period": "Play"
  },
  {
    "startTime": "2017-09-01T09:00:00.000Z",
    "endTime": "2017-09-01T12:00:00.000Z",
    "season": "Winter",
    "period": "Work"
  }
]
```