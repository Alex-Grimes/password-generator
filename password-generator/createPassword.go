package main

import (
	"math/rand"
	"time"
)

// randomizethe seed for rand so that our deterministic generator dosent produce the same sequences everytime
func init() {
	rand.Seed(time.Now().UnixNano())
}

const voc string = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers string = "0123456789"
const symbols string = "!@#$%&*+_-="

func createPassword(length int, hasNumbers bool, hasSymbols bool) string {
	chars := voc

	if hasNumbers {
		chars = chars + numbers
	}

	if hasSymbols {
		chars = chars + symbols
	}
	return generatePassword(length, chars)
}

//Todo create generate Password function

func generatePassword(length int, chars string) string {
	password := ""
	for i := 0; i < length; i++ {
		password += string([]rune(chars)[rand.Intn(len(chars))])
	}

	return password
}
