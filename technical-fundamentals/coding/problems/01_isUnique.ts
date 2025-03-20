// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {

    let letters: string[]= []
    for(var i = 0; i<str.length; i++){
        const letter= str[i] 
        if (letters.includes(letter)) return false
    letters.push(letter)
    }
return true
}
