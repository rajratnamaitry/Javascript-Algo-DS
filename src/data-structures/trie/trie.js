 class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    /**
 * Trie Exercise - addWord
 * 
 * This function should add the given word starting from the given index to the Trie.
 * 
 * 
 * It will be recursive and notify the correct child of this Trie to add the word starting from a later index.
 * 
 * Consider what the add function should do when it reaches the end of the word as a word does not necessarily end at a leaf.
 * 
 * You must mark nodes which are the ends of words so that the words can be reconstructed later.
 * 

 */

    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }
    /** 
     * Trie Exercise - findWord
     * 
     * Write a function called findWord which accepts a string and returns the characters object for the last character in that word if the string is a word in the Trie, otherwise it returns undefined. Try to solve this without having to find every single word in the Trie. addWord is implement to help you test the function.
     * 
     * index.js
    */
    findWord(word, index = 0) {
        // This function will return the node in the trie
        // which corresponds to the end of the passed in word.

        // Be sure to consider what happens if the word is not in this Trie.

        var char = word[index];
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }
    /**
     * Trie Exercise - getWords
     * 
     * Write a function on the Trie.prototype called getWords which returns an array of all of the words in the Trie.
     * 
     */
    getWords(words = [], currentWord = "") {
        // This function will return all the words which are
        // contained in this Trie.
        // it will use currentWord as a prefix,
        // since a Trie doesn't know about its parents.

        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
    autoComplete(prefix) {
        // This function will return all completions
        // for a given prefix.
        // It should use find and getWords.
        var subTrie = this.find(prefix);
        if (subTrie) {
            return subTrie.getWords([], prefix);
        } else {
            return [];
        }
    }
    
    /**
     * Trie Exercise - removeWord
     * 
     * Write a function called removeWord which accepts a string and removes the word from the Trie. addWord is implement to help you test the function.
     * 

    */
    removeWord(word) {
    }
}
var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
t.removeWord('fat')
t.characters.f.characters.a.characters.t.isWord // false
t.characters.f.characters.a.characters.t.characters.e.isWord // true
t.removeWord('argue')
t.characters.a.characters.r // undefined
// find
// t.addWord('fun')
// t.addWord('fast')
// t.addWord('fat')
// t.addWord('fate')
// t.addWord('father')
// t.findWord('taco') // undefined
// t.findWord('fat').characters // {t: Trie}
// t.findWord('father').characters // {}
// t.findWord('father').isWord // true
