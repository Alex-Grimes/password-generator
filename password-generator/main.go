package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/atotto/clipboard"
)

func main() {
	log.SetPrefix("Error:")
	log.SetFlags(0)

	fmt.Println("Creating Password")

	var length = flag.Int("length", 8, "Length of the password")
	var symbols = flag.Bool("symbols", true, "Include symbols in the password")
	var numbers = flag.Bool("numbers", true, "Include numbers in the password")

	flag.Parse()

	fmt.Printf("Length: %v, Numbers: %v, Symbols: %v \n", *length, *numbers, *symbols)

	password := createPassword(*length, *numbers, *symbols)
	fmt.Println("Password Created: ", password)

	savePassword(password)
	error := clipboard.WriteAll(password)
	if error != nil {
		log.Fatal(error)
	} else {
		fmt.Println("Password copied to clipboard")
	}
}
