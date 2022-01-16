function getPhrase(phrase) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let onlyVowels = '';

    for(let i = 0; i < vowels.length; i++) {
        if(vowels.includes(phrase[i]) && onlyVowels.includes(phrase[i]) == false) {
            onlyVowels += phrase[i];
        }
    } 

    return onlyVowels;
}

module.exports = getPhrase;