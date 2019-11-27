package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Article struct {
	Id          string `json:"_id"`
	Employee_id string `json:"employee_id"`
	First_name  string `json:"first_name"`
	Last_name   string `json:"last_name"`
	Department  string `json:"department"`
	Dob         string `json:"dob"`
	Mobile      string `json:"mobile"`
	Address     string `json:"address"`
}

// let's declare a global Articles array
// that we can then populate in our main function
// to simulate a database
var Articles []Article

func homePage(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	fmt.Fprintf(w, "Welcome to the HomePage!")
	fmt.Println("Endpoint Hit: homePage")
}
func returnAllArticles(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	fmt.Println("Endpoint Hit: returnAllArticles")
	json.NewEncoder(w).Encode(Articles)
}
func handleRequests() {
	// creates a new instance of a mux router
	myRouter := mux.NewRouter().StrictSlash(true)
	// replace http.HandleFunc with myRouter.HandleFunc
	myRouter.HandleFunc("/", homePage).Methods("GET", "OPTIONS")
	myRouter.HandleFunc("/all", returnAllArticles).Methods("GET", "OPTIONS")
	// finally, instead of passing in nil, we want
	// to pass in our newly created router as the second
	// argument
	log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
	fmt.Println("Rest API v2.0 - Mux Routers")
	Articles = []Article{
		Article{Id: "Hello",
			Employee_id: "Article Description",
			First_name:  "Article Content",
			Last_name:   "Article",
			Department:  "Article Content",
			Dob:         "2016-05-25T10:05:44Z",
			Mobile:      "Article Content",
			Address:     "Article Content"},
	}

	handleRequests()
}
