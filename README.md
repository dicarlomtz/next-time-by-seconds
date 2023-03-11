# Next Time By Seconds

This project takes 4 parameters: _hour_, _minute_, _second_, _secondsLater_. The first three parameters, represent and specific time in 24H format, like -> 13:23:50. The last parameter, _secondsLater_ will determine the number of seconds that must be added to the specific time, so if we add the time 12:23:23 and we want to add 30 seconds, the result will be 12:23:53

## Requirements

- Node and NPM

## How to run

- On the root directory, run the following command with the 4 parameters needed in the following order: _hour_ _minute_ _second_ _secondsLater_

```
npm start 12 23 23 30
```

This command is the same as: add 30 seconds to 12:23:23
