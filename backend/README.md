
BE api for app(iOS and Android) events tracking.

Assumption:
Flutter app continously sending data to **hack23_events_tracks** similar like the clickstream events but without delay.
That POST api missing and we mocked the data.

**Curl**

`curl --location 'localhost:8080/events?appNumber=Test' \
--header 'Content-Type: application/json'`

**Response**

`{
"status": "200",
"message": "",
"data": {
"app_number": "Test",
"screen_name": "register",
"events": {
"123": 11,
"123454": 10
}
}
}`
