package main

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
