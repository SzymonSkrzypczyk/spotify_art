package main

import (
	"context"
	"fmt"
	"os"

	_ "github.com/joho/godotenv/autoload"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetAPIKey() string {
	// autoload is used therefore it should be fine
	// it is a simple yet effective way of hiding the KEY ;)
	// it should be defined as an environment variable
	// or inside(preffered option) .env file
	// API_KEY=...
	return os.Getenv("API_KEY")
}

func (a *App) GetClientID() string {
	// autoload is used therefore it should be fine
	// it is a simple yet effective way of hiding the KEY ;)
	// it should be defined as an environment variable
	// or inside(preffered option) .env file
	// CLIENT_ID=...
	return os.Getenv("CLIENT_ID")
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
