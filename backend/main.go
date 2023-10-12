package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	"log"
	"net/http"
)

var db *sql.DB

func main() {

	var err error
	db, err = sql.Open("postgres", "postgres://postgres:postgres@localhost/mydb?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	router := gin.Default()
	// Create a CORS middleware instance with your desired options.
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000", "http://localhost:3001"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}

	router.GET("/events", getEventsData)
	//router.POST("/albums", createAlbum)

	router.Run("localhost:8080")
}

// returns a list of albums from the database
func getEventsData(c *gin.Context) {
	appNo := c.Query("appNumber")
	c.Header("Content-Type", "application/json")
	c.Header("Access-Control-Allow-Origin", "*")
	query := fmt.Sprintf("SELECT app_number, screen_name, events FROM hack23_events_tracks where app_number = '%s' order by last_update_ts desc limit 1", appNo)
	rows, err := db.Query(query)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err})
		log.Fatal(err)
	}
	defer rows.Close()

	var model EventModel
	for rows.Next() {
		//var model EventModel
		var events []byte
		err := rows.Scan(&model.AppNum, &model.ScreenName, &events)
		if err != nil {
			c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err})
			log.Fatal(err)
		}
		if err := json.Unmarshal(events, &model.Events); err != nil {
			c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err})
			log.Fatal(err)
		}
	}
	err = rows.Err()
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err})
		log.Fatal(err)
	}

	if model.Events == nil {
		c.IndentedJSON(http.StatusOK, Response{Status: "404", Message: "No records found", Data: nil})
	}

	c.IndentedJSON(http.StatusOK, Response{Status: "200", Message: "", Data: model})
}

type EventModel struct {
	AppNum     string      `json:"app_number"`
	ScreenName string      `json:"screen_name"`
	Events     interface{} `json:"events"`
}

type Response struct {
	Status  string      `json:"status"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}
