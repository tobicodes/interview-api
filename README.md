### Context:

When buildings use energy, they are charged different rates depending on when they use it. During the Summer
in the middle of the day, energy is in higher demand and therefore more expensive than during a Fall evening. This
behavior in the energy markets is described by Time of Use (TOU) periods.

Your task is to create a basic API to show the customer their TOU periods. You may use any language or framework
of your choice. It will read a json body provided in each request and produce json as output. In total, it shouldn’t
take more than a couple hours.


### Setup:

The data file will contain a list of season objects, each containing a list of TOU periods.
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
          "toDayOfWeek": 5,
          "fromHour": 9,
          "toHour": 17,
          "fromMinute": 0,
          "toMinute": 0
      },
      {
          "periodName": "Play",
          "fromDayOfWeek": 5,
          "toDayOfWeek": 0,
          "fromHour": 0,
          "toHour": 0,
          "fromMinute": 0,
          "toMinute": 0
      },
      {
          "periodName": "Play",
          "fromDayOfWeek": 0,
          "toDayOfWeek": 5,
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
and between `April 1` and `August 31`. Some notes about seasons/periods:

* The season applies only to days between the startDay of the startMonth and the endDay of the endMonth, inclusive.
* The weekdays of each period are numbered, starting with Monday and are inclusive start and exclusive end.
* The hours and minutes of each period are inclusive start and exclusive end.
* No two seasons or periods will overlap.


### API:

Your endpoint should look like this:

>POST http://localhost:8080/api/seasons/?startTime={startTime}&endTime={endTime}

where {startTime} and {endTime} are iso-formatted strings. (e.g. 2017-01-01T00:00:00.000Z) It should be a POST request
thats body is a JSON list representing the seasons and TOU periods to be used.

It should produce a list of json objects, each with a startTime and endTime, as well as the season and period they
correspond to. Using the above example as the request body, the result from this url:

> http://localhost:8080/api/seasons/?startTime=**2017-04-03T00:00:00.000Z**&endTime=**2017-04-03T00:17:00.000Z**

should be this response:

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

We have provided some test cases to further illustrate and to allow you to test your code against some (but not all!)
edge cases.


## Submission instructions:

Create a fork from of the following repository: https://github.com/AdvMicrogrid/interview-api. Add your API code to
the src directory and provide a brief README.md describing how to build and run your code. Once you are finished,
share your repository with jasonf@advmicrogrid.com.


### Review:

When reviewing your code, we will primarily be looking for the following, in no particular order:

1. Readable, maintainable code structure
1. Algorithmic speed
1. Test case accuracy
1. Bonus points for error-handling