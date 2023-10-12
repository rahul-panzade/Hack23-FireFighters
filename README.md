# Hack23-FireFighters
BE api for app(iOS and Android) events tracking.

Team Players
* TAPAS PANDA
* SHIJIN VARGHESE
* SAILAZA PRASAD
* RAHUL PANZADE


Curl

`curl --location 'localhost:8080/events?appNumber=Test' \
--header 'Content-Type: application/json'`

Response

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
