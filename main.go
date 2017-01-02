package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/ab22/env"
)

type Config struct {
	Port string `env:"PORT" envDefault:"1337"`
	Env  string `env:"ENV" envDefault:"DEV"`
}

func NoDirListing(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		urlPath := r.URL.Path

		if urlPath == "/" {
			h.ServeHTTP(w, r)
			return
		}

		if strings.HasSuffix(urlPath, "/") {
			http.NotFound(w, r)
			return
		}

		h.ServeHTTP(w, r)
	}
}

func main() {
	var (
		err error
		cfg Config
	)

	log.Println("Starting server...")

	if err = env.Parse(&cfg); err != nil {
		log.Fatalln("error parsing config struct:", err)
		return
	}

	fileServer := NoDirListing(http.FileServer(http.Dir("dist/")))

	http.Handle("/", fileServer)

	log.Println("Listening...")

	port := ":" + cfg.Port

	err = http.ListenAndServe(port, nil)

	if err != nil {
		log.Fatalln("listen and serve error:", err)
	}
}
