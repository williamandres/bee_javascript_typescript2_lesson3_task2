//Disemvowel Trolls

function disemvowel(str) {
    return str.match(/[^a|e|i|o|u]/gi).join('') === null ? " " : str.match(/[^a|e|i|o|u]/gi).join('')
}