package main

import (
	"flag"
	"fmt"
	"log"
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
	fmt.Printf("Password Created: ", password)
}
