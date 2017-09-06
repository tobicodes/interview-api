# AMS Software Developer Test

### Context

When buildings use energy, they are charged different rates depending on when they use it. During the Summer
in the middle of the day, energy is in higher demand and therefore more expensive than during a Fall evening. This
behavior in the energy markets is described by Time of Use (TOU) periods.

Your task is to create a basic API to show the customer their TOU periods. You may use any language or framework
of your choice. It will read a JSON body provided in each request and produce JSON as output. In total, it shouldn’t
take more than a couple hours.


### Setup

Each request will contain a list of season objects, each holding a list of TOU periods.
The seasons will look like this:

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
  ...
]
```

Each season object describes which times are considered part of that season’s periods. In the example above, a time would
be considered part of the "Summer Work" period if it occurred between `9:00AM` and `5:00PM`, between `Monday` and `Friday`,
and between `April 1` and `August 31`. 

Some notes about seasons/periods:

* The season applies only to days between the startDay of the startMonth and the endDay of the endMonth, inclusive.
* The weekdays of each period are numbered `0` to `6`, starting with Monday, inclusive.
* The hours and minutes of each period are inclusive start and exclusive end.
* No two seasons or periods within a season will overlap.


### API

Your endpoint should look like this:

>POST http://localhost:8080/api/tou/changes?startTime={start}&endTime={end}

where `{start}` and `{end}` are iso-formatted strings (e.g. `2017-01-01T00:00:00.000Z`). 

It should consume a POST request whose body is a JSON list representing the seasons and TOU periods to be used.

It should produce a list of JSON objects corresponding to time of use changes, each with a `startTime` and `endTime`, as well as the season and period they
correspond to. The list of objects should fully span the time interval from `startTime` to `endTime`.

Using the above season as the request body, the result from this request:

> http://localhost:8080/api/tou/changes?startTime=2017-04-03T00:00:00.000Z&endTime=2017-04-03T00:17:00.000Z

should produce this response:

```json
[
  {
    "startTime": "2017-04-03T00:00:00.000Z",
    "endTime": "2017-04-03T09:00:00.000Z",
    "season": "Summer",
    "period": "Play"
  },
  {
    "startTime": "2017-04-03T09:00:00.000Z",
    "endTime": "2017-04-03T17:00:00.000Z",
    "season": "Summer",
    "period": "Work"
  }
]
```

We have provided some test cases to further illustrate the intended behavior (see the `examples` folder) and to allow you to test your code against some (but not all!)
edge cases.


### Submission instructions

Clone this repository. Add your API code to the `src` directory and provide a brief `README.md` describing how to build and run your code. 

Once you are finished, bundle your repository into a file by calling `git bundle create repoarchive.bundle master` on the command line and send the outputted `repoarchive.bundle` to jasonf@advmicrogrid.com.


### Review

When reviewing your code, we will primarily interested in the following (in no particular order):

1. Readable, maintainable code structure
1. Algorithmic performance
1. Test case accuracy

Bonus points for error-handling.

Good luck!