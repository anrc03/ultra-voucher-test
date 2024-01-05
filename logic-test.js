// This program was built with as little built-in function as possible 

function splitWord(word) { 
    let letters = [];
    for (i = 0; i < word.length; i++) letters.push(word[i]);
    return letters;
}

function joinLetters(arr) { 
    let word = "";
    for (i = 0; i < arr.length; i++) word += arr[i]
    return word;
}

function sortLetter(word) { 
    let letters = splitWord(word)
    for (let i = 0; i < letters.length; i++) {
        for (let j = i+1; j < letters.length; j++) {
            if (letters[j] < letters[i]) {
                temp = letters[i]
                letters[i] = letters[j]
                letters[j] = temp 
            }
        }
    }
    return joinLetters(letters)
}

function groupAnagram(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "skip") continue
        let currentLetter =  sortLetter(arr[i]);
        let ans = []
        ans.push(arr[i])
        for (let j = i+1; j < arr.length; j++) {
            let comparedLetter = sortLetter(arr[j]);
            if (currentLetter === comparedLetter) {
                ans.push(arr[j])
                arr[j] = "skip"
            }
        }
        result.push(ans)   
    }
    return result
}

function main() {
    const arr = ["cook", "save", "taste", "aves", "vase", "state", "map"]
    console.log(groupAnagram(arr))
}

main()


